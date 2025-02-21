import { Box, Heading } from '@chakra-ui/react';
import TodoList from '../to-do-list/TodoList';

export function TodoTask(): React.ReactElement {
  return (
    <Box p={4}>
      <Heading size="lg" pb={4}>
        Today&apos;s Tasks
      </Heading>
      <TodoList />
    </Box>
  );
}
