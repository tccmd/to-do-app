import { Card, CardBody, StackDivider, VStack } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { filteredTodoListState } from '../../recoil_state';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from './types';

export default function TodoList(): React.ReactElement {
  const todoList = useRecoilValue(filteredTodoListState);
  console.log(todoList);
  return (
    <Card>
      <CardBody p="none">
        {todoList.length === 0 ? (
          <p>...</p>
        ) : (
          <VStack divider={<StackDivider borderColor="gray.200" />} align="stretch" p="none">
            {todoList.map((todoItem: TodoItemType) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}{' '}
          </VStack>
        )}
      </CardBody>
    </Card>
  );
}
