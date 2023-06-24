import { FontAwesome } from '@expo/vector-icons';
import { memo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import { Text, Checkbox, Surface } from 'react-native-paper';
import Animated, {
  SlideInLeft,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useAppDispatch } from 'store';
import { Todo, removeTodo, toggleStatus } from 'store/slices/todoSlice';

export interface TodoItemProps {
  todo: Todo;
}

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const THRESHOLD = -SCREEN_WIDTH * 0.25;

const TODO_ITEM_HEIGHT = 50;

const AnimatedSurface = Animated.createAnimatedComponent(Surface);

export const TodoItem = memo(({ todo }: TodoItemProps) => {
  const { id, description, isComplete } = todo;

  const translateX = useSharedValue(0);
  const todoHeight = useSharedValue(TODO_ITEM_HEIGHT);
  const marginTop = useSharedValue(12);
  const opacity = useSharedValue(1);

  const dispatch = useAppDispatch();

  const remove = () => {
    dispatch(removeTodo(id));
  };

  const toggle = () => {
    dispatch(toggleStatus(id));
  };

  const panGesture = useAnimatedGestureHandler({
    onActive: (event) => {
      translateX.value = event.translationX;
    },
    onEnd: () => {
      const shouldBeDissmissed = translateX.value < THRESHOLD;
      if (shouldBeDissmissed) {
        translateX.value = withTiming(-SCREEN_WIDTH);
        todoHeight.value = withTiming(0);
        marginTop.value = withTiming(0);
        opacity.value = withTiming(0, undefined, (isFinished) => {
          if (isFinished) {
            runOnJS(remove)();
          }
        });
      } else {
        translateX.value = withTiming(0);
      }
    },
  });

  const reanimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const reanimatedIconContainerStyle = useAnimatedStyle(() => ({
    opacity: withTiming(translateX.value < THRESHOLD ? 1 : 0),
  }));

  const reanimatedTodoContainerStyle = useAnimatedStyle(() => ({
    height: todoHeight.value,
    marginTop: marginTop.value,
    opacity: opacity.value,
  }));

  return (
    <Animated.View style={reanimatedTodoContainerStyle}>
      <Animated.View style={[styles.iconContainer, reanimatedIconContainerStyle]}>
        <FontAwesome name="trash" size={28} color="red" />
      </Animated.View>
      <PanGestureHandler failOffsetY={[-5, 5]} activeOffsetX={[-5, 5]} onGestureEvent={panGesture}>
        <AnimatedSurface entering={SlideInLeft} style={[styles.todo, reanimatedStyle]}>
          <Checkbox status={isComplete ? 'checked' : 'unchecked'} onPress={toggle} />
          <Text style={[isComplete && styles.completedText, { flex: 1 }]}>{description}</Text>
        </AnimatedSurface>
      </PanGestureHandler>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  todo: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    paddingRight: 6,
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: TODO_ITEM_HEIGHT,
    width: TODO_ITEM_HEIGHT,
    position: 'absolute',
    right: 5,
  },
  completedText: {
    textDecorationLine: 'line-through',
    opacity: 0.7,
  },
});
