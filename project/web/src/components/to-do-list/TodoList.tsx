import { Card, CardBody, Skeleton, StackDivider, VStack } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { useUpdatePriorityMutation } from '../../generated/graphql';
import { filteredAndSortedTodoListState } from '../../recoil_state';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from './types';

export default function TodoList({ loading }: { loading: boolean }): React.ReactElement {
  const filteredAndSortedTodoList = useRecoilValue(filteredAndSortedTodoListState);
  const [todoList, setTodoList] = useState(filteredAndSortedTodoList);
  const [updatePriorityMutation] = useUpdatePriorityMutation();

  useEffect(() => {
    setTodoList(filteredAndSortedTodoList);
  }, [filteredAndSortedTodoList]);

  const handleReorder = (newList: TodoItemType[]) => {
    setTodoList(newList);

    newList.forEach((todo: TodoItemType, index: number) => {
      updatePriorityMutation({
        variables: {
          updatePriorityId: todo.id, 
          priority: index + 1,
        },
        update: (cache) => {
          newList.forEach((todo, index) => {
            cache.modify({
              id: cache.identify({ __typename: 'Todo', id: todo.id }),
              fields: {
                priority() {
                  return index + 1;
                },
              },
            });
          });
        },
      });
    });
  };

  return (
    <Card>
      <CardBody p="none">
        {todoList.length === 0 ? (
          <Skeleton></Skeleton>
        ) : (
          <Skeleton isLoaded={!loading}>
            <Reorder.Group axis="y" onReorder={handleReorder} values={todoList}>
              <VStack divider={<StackDivider borderColor="gray.200" />} align="stretch" p="none">
                {todoList.map((todoItem: TodoItemType) => (
                  <TodoItem key={todoItem.id} item={todoItem} />
                ))}{' '}
              </VStack>
            </Reorder.Group>
          </Skeleton>
        )}
      </CardBody>
    </Card>
  );
}
