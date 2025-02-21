import { useRecoilValue } from 'recoil';
import { Card, CardBody, StackDivider, VStack } from '@chakra-ui/react';
import TodoItem from './TodoItem';
import { filteredTodoListState } from '../../recoil_state';
import { TodoItem as TodoItemType } from './types';

export default function TodoList(): React.ReactElement {
  const todoList = useRecoilValue(filteredTodoListState);
  return (
    <Card>
      <CardBody>
        {todoList.length === 0 ? (
          <p>...</p>
        ) : (
          <VStack divider={<StackDivider borderColor="gray.200" />} spacing={4} align="stretch">
            {todoList.map((todoItem: TodoItemType) => (
              <TodoItem key={todoItem.id} item={todoItem} />
            ))}{' '}
          </VStack>
        )}
      </CardBody>
    </Card>
  );
}
