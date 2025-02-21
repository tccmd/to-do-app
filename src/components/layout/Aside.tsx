import { Box, Divider, Text } from '@chakra-ui/react';
import TodoListFilters from '../to-do-list/TodoListFilters';

export default function Aside(): React.ReactElement {
  return (
    <Box p={4}>
      <Box p={2}>
        <Text fontSize="3xl" as="b">
          Todo
        </Text>
      </Box>
      <Divider />
      <TodoListFilters />
    </Box>
  );
}
