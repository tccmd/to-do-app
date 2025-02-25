import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useTodosQuery } from '../../generated/graphql';
import { todoListState } from '../../recoil_state';
import FilterButton from '../othder-component/FilterButton';
import ProgressOverview from '../to-do-list/ProgressOverview';
import TodoList from '../to-do-list/TodoList';

export function TodoTask(): React.ReactElement {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

        const { data, loading, error } = useTodosQuery();
      const [todoList, setTodoList] = useRecoilState(todoListState);
    
          useEffect(() => {
            if (data && data.Todos) {
              setTodoList(data.Todos);
              console.log('데이터'); // 디버깅
            }
          }, [data]);

  return (
    <Box p={8} bg={bgColor} h="100%">
      <Heading size="lg" pb={4}>
        Today&apos;s Tasks
      </Heading>
      <Flex flexDirection="column" p={4} gap={8}>
        <TodoList loading={loading} />
        <ProgressOverview />
      </Flex>
      <FilterButton />
    </Box>
  );
}
