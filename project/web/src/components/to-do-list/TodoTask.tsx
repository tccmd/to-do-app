import { Box, Flex, Heading, Skeleton, useColorModeValue } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { useTodosQuery } from '../../generated/graphql';
import { todoListState } from '../../recoil_state';
import FilterButton from '../other-component/FilterButton';
import ProgressOverview from './ProgressOverview';
import TodoList from './TodoList';

export function TodoTask(): React.ReactElement {
  const mainBgColor = useColorModeValue('gray.50', 'gray.900');

  const { data, loading, error } = useTodosQuery();
  const [todoList, setTodoList] = useRecoilState(todoListState);

  useEffect(() => {
    if (loading) console.log('로딩중');
    if (!loading && data && data.todos) {
      setTodoList(data.todos);
      console.log('데이터'); // 디버깅
      console.log(data); // 디버깅
    } else {
      console.log('???')
    }
    if (data && data.todos) console.log(data.todos);
    if(error) console.log(error)
  }, [data]);

  return (
    <Box p={8} bg={mainBgColor} h="100%">
      <Heading size="lg" pb={4}>
        Today&apos;s Tasks
      </Heading>
      <Flex flexDirection="column" p={4} gap={8}>
        <Skeleton isLoaded={!loading}>
          <TodoList />
        </Skeleton>
        <ProgressOverview />
      </Flex>
      <FilterButton />
    </Box>
  );
}
