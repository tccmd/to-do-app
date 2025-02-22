import { Card, CardBody, StackDivider, VStack } from '@chakra-ui/react';
import { Reorder } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { filteredTodoListState, todoListState } from '../../recoil_state';
import TodoItem from './TodoItem';
import { TodoItem as TodoItemType } from './types';

// const initialItems = ['🍅 Tomato', '🥒 Cucumber', '🧀 Cheese', '🥬 Lettuce'];

export default function TodoList(): React.ReactElement {
  const fiterdTodoList = useRecoilValue(filteredTodoListState);
  const [todoList, setTodoList] = useState(fiterdTodoList);
  const setRecoilTodoList = useSetRecoilState(todoListState); // todoListState를 업데이트하는 setter

  // filteredTodoListState가 바뀌면 todoList도 업데이트
  useEffect(() => {
    setTodoList(fiterdTodoList);
  }, [fiterdTodoList]);

  const handleReorder = (newList: TodoItemType[]) => {
    setTodoList(newList); // 로컬 상태 업데이트
    setRecoilTodoList(newList); // Recoil 상태 업데이트 (순서를 유지하기 위해)
  };

  return (
    <Card>
      <CardBody p="none">
        {todoList.length === 0 ? (
          <p>...</p>
        ) : (
          <VStack divider={<StackDivider borderColor="gray.200" />} align="stretch" p="none">
            <Reorder.Group axis="y" onReorder={handleReorder} values={todoList}>
              {todoList.map((todoItem: TodoItemType) => (
                <TodoItem key={todoItem.id} item={todoItem} />
              ))}{' '}
              {/* {items.map((item) => (
                <TodoItem key={item} item={item} />
              ))} */}
            </Reorder.Group>
          </VStack>
        )}
      </CardBody>
    </Card>
  );
}
