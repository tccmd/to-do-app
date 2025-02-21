import { Checkbox, Editable, EditableInput, EditablePreview, Flex, Text } from '@chakra-ui/react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil_state';
import { TodoItem as TodoItemType } from './types';

const replceItemAtIndex = (arr: TodoItemType[], index: number, newValue: TodoItemType) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: TodoItemType[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default function TodoItem({ item }: { item: TodoItemType }): React.ReactElement {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  return (
    <Flex gap={4}>
      <Checkbox type="checkbox" checked={item.isComplete} onChange={toggleItemCompletion} colorScheme="black" />
      <Flex flexDirection="column">
        <Editable defaultValue={item.text} fontWeight="600">
          <EditablePreview />
          <EditableInput onChange={editItemText} />
        </Editable>
        <Text color="#6B7280">Due today at 5:00 PM</Text>
      </Flex>
      {/* <button type="button" onClick={deleteItem}>
            X
          </button> */}
    </Flex>
  );
}
