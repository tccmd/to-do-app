import { Checkbox, Editable, EditableInput, EditablePreview, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { Reorder, useDragControls, useMotionValue } from 'framer-motion';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../recoil_state';
import { ReorderIcon } from '../othder-component/Icon';
import { useRaisedShadow } from '../othder-component/use-raised-shadow';
import { TodoItem as TodoItemType } from './types';

const replaceItemAtIndex = (arr: TodoItemType[], index: number, newValue: TodoItemType) => {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
};

const removeItemAtIndex = (arr: TodoItemType[], index: number) => {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
};

export default function TodoItem({ item }: { item: TodoItemType }): React.ReactElement {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem.id === item.id);
  const hoverColor = useColorModeValue('gray.50', 'gray.800');

  const editItemText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: e.target.value,
    });
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });
    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);
    setTodoList(newList);
  };

  const y = useMotionValue(0);
  const boxShadow = useRaisedShadow(y);
  const dragControls = useDragControls();

  return (
    <Reorder.Item value={item} id={item.text} style={{ boxShadow, y }} dragListener={false} dragControls={dragControls}>
      <Flex
        _hover={{
          bg: hoverColor,
        }}
        px={6}
        py={4}
        width="100%"
        justifyContent="space-between"
        alignItems="center"
      >
        <Flex gap={4}>
          <Checkbox
            size="lg"
            type="checkbox"
            isChecked={item.isComplete}
            onChange={toggleItemCompletion}
            colorScheme="black"
          />
          <Flex flexDirection="column">
            <Editable defaultValue={item.text} fontWeight="600">
              <EditablePreview />
              <EditableInput onChange={editItemText} />
            </Editable>
            <Text color="#6B7280">Due today at 5:00 PM</Text>
          </Flex>
        </Flex>
        <ReorderIcon dragControls={dragControls} />
        {/* <button type="button" onClick={deleteItem}>
            X
          </button> */}
      </Flex>
    </Reorder.Item>
  );
}
