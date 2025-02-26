import { AddIcon, Search2Icon } from '@chakra-ui/icons';
import { Button, Input, InputGroup, InputLeftElement, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { TodosDocument, TodosQuery, useAddTodoMutation } from '../../generated/graphql';
import { todoListSearchState } from '../../recoil_state';

export default function TodoItemCreator(): React.ReactElement {
  const [inputValue, setInputValue] = useState('');
  const [mutation, { loading }] = useAddTodoMutation();
  const [search, setSearch] = useRecoilState(todoListSearchState);
  const toast = useToast();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setSearch(e.target.value);
  };

  const addItem = () => {
    // 비어있을 경우
    if (inputValue === '') {
      toast({
        title: 'Add Task',
        description: '내용을 입력해주세요.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    // 비동기 토스트
    toast.promise(
      mutation({
        variables: {
          todoTextInput: {
            text: inputValue,
          },
        },
        update: (cache, { data }) => {
          setInputValue('');
          setSearch('');

          const cacheTodos =
            cache.readQuery<TodosQuery>({
              query: TodosDocument,
            })?.todos || [];

          cache.writeQuery({
            query: TodosDocument,
            data: {
              todos: [...(cacheTodos || []), data?.addTodo],
            },
          });
        },
      }),
      {
        success: { title: 'Add Task', description: 'Added!' },
        error: { title: 'Add Task', description: 'Something wrong' },
        loading: { title: 'Add Task', description: 'Please wait' },
      },
    );
  };

  // const addItem = () => {
  //   if (inputValue === '') {
  //     toast({
  //       title: 'Add Task',
  //       description: '내용을 입력해주세요.',
  //       status: 'error',
  //       duration: 9000,
  //       isClosable: true,
  //     });
  //   } else {
  //     mutation({
  //       variables: {
  //         todoTextInput: {
  //           text: inputValue,
  //         },
  //       },
  //       update: (cache, { data }) => {
  //         const examplePromise = new Promise((resolve, reject) => {
  //           if (!loading) resolve(200);
  //         });
  //         toast.promise(examplePromise, {
  //           success: { title: 'Promise resolved', description: 'Looks great' },
  //           error: { title: 'Promise rejected', description: 'Something wrong' },
  //           loading: { title: 'Promise pending', description: 'Please wait' },
  //         });
  //         setInputValue('');
  //         setSearch('');
  //         const cacheTodos =
  //           cache.readQuery<TodosQuery>({
  //             query: TodosDocument,
  //           })?.todos || [];
  //         if (cacheTodos) {
  //           cache.writeQuery({
  //             query: TodosDocument,
  //             data: {
  //               todos: [...(cacheTodos || []), data?.addTodo],
  //             },
  //           });
  //         }
  //       },
  //     });
  //   }
  // };

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
          aria-label='투두 검색, 입력'
        />
      </InputGroup>
      <Button
        onClick={addItem}
        leftIcon={<AddIcon boxSize={2}/>}
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
