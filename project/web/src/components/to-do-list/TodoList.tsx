import { Card, CardBody, StackDivider, useColorModeValue, VStack } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { useUpdatePriorityMutation } from '../../generated/graphql';
import { filteredAndSortedTodoListState, searchedTodoListState, todoListSearchState } from '../../recoil_state';
import NoTesks from '../othder-component/NoTesks';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from './types';

export default function TodoList(): React.ReactElement {
  const filteredAndSortedTodoList = useRecoilValue(filteredAndSortedTodoListState);
  const [todoList, setTodoList] = useState(filteredAndSortedTodoList);
  const [search, setSearch] = useRecoilState(todoListSearchState);
  const searchedTodoList = useRecoilValue(searchedTodoListState);
  const [updatePriorityMutation] = useUpdatePriorityMutation();
  const borderColor = useColorModeValue('gray.200','gray.600');

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
          <NoTesks />
        ) : (
          <Reorder.Group axis="y" onReorder={handleReorder} values={todoList}>
            <VStack divider={<StackDivider borderColor={borderColor} />} align="stretch" p="none">
              {search === ''
                ? todoList.map((todoItem: TodoItemType) => <TodoItem key={todoItem.id} item={todoItem} />)
                : searchedTodoList.map((todoItem: TodoItemType) => <TodoItem key={todoItem.id} item={todoItem} />)}
            </VStack>
          </Reorder.Group>
        )}
      </CardBody>
    </Card>
  );
}
