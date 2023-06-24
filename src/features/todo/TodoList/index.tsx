import { EmptyTodoList } from 'features/todo/EmptyTodoList';
import { FlatList } from 'react-native';
import { useAppSelector } from 'store';
import { type Todo } from 'store/slices/todoSlice';

import { TodoInput } from '../TodoInput';
import { TodoItem } from '../TodoItem';

export const TodoList = () => {
  const todos = useAppSelector((state) => state.todo);

  const renderItem = ({ item }: { item: Todo }) => {
    return <TodoItem todo={item} />;
  };

  return (
    <>
      {todos.length ? (
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 10 }}
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      ) : (
        <EmptyTodoList />
      )}
      <TodoInput />
    </>
  );
};
