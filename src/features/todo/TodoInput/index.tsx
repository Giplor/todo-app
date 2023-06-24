import { useAppTheme } from 'hooks/useAppTheme';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { useAppDispatch } from 'store';
import { type Todo, addTodo } from 'store/slices/todoSlice';

export const TodoInput = () => {
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();

  const { theme } = useAppTheme();

  const { t } = useTranslation();

  const onAddTodo = () => {
    if (text) {
      const todo: Todo = {
        id: Date.now().toLocaleString(),
        description: text,
        isComplete: false,
      };

      dispatch(addTodo(todo));
      setText('');
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        outlineStyle={{ borderRadius: 12 }}
        style={{ width: '75%' }}
        mode="outlined"
        value={text}
        onChangeText={setText}
        placeholder={`${t('todoPlaceholder')}...`}
        onSubmitEditing={onAddTodo}
      />
      <IconButton
        icon="plus-circle-outline"
        size={50}
        iconColor={theme.colors.primary}
        onPress={onAddTodo}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
  },
});
