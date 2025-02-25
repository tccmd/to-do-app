import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { TodosDocument, TodosQuery, useAddTodoMutation, useTodosQuery } from '../../generated/graphql';
import { todoListState } from '../../recoil_state';

export default function TodoItemCreator(): React.ReactElement {
  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoListState);
  const [mutation, { loading }] = useAddTodoMutation();
  const { data } = useTodosQuery();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    mutation({
      variables: {
        todoTextInput: {
          text: inputValue,
        },
      },
      update: (cache, { data }) => {
        const cacheTodos =
          cache.readQuery<TodosQuery>({
            query: TodosDocument,
          })?.Todos || [];
        if (cacheTodos) {
          cache.writeQuery({
            query: TodosDocument,
            data: {
              Todos: [...(cacheTodos || []), data?.AddTodo],
            },
          });
        }
      },
    });
  };

  return (
    <>
      <InputGroup>
        <InputLeftElement pointerEvents="none">
          <Search2Icon color="gray.300" />
        </InputLeftElement>
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
      </InputGroup>
      {/* <MuiAutoComplete /> */}
      <Button
        onClick={addItem}
        leftIcon={<AddIcon boxSize={2} />}
        colorScheme="black"
        variant="solid"
        size="md"
        minW="110px"
        ml={2}
      >
        {loading ? '...' : 'Add Task'}
      </Button>
    </>
  );
}
