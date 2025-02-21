import { AddIcon } from '@chakra-ui/icons';
import { Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { todoListState } from '../../recoil_state';
import { TodoItem } from './types';

let id = 0;
function getId() {
  return id++;
}

export default function TodoItemCreator(): React.ReactElement {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTotoList: TodoItem[]) => [
      ...oldTotoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue('');
  };

  return (
    <>
      <Input
        type="text"
        value={inputValue}
        onChange={onChange}
        variant="outline"
        placeholder="Search tasks..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addItem();
          }
        }}
      />
      <Button
        onClick={addItem}
        leftIcon={<AddIcon boxSize={2} />}
        colorScheme="black"
        variant="solid"
        size="sm"
        minW="100px"
      >
        Add Task
      </Button>
    </>
  );
}
