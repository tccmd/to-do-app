import { Box, Divider, Flex } from '@chakra-ui/react';
import TodoListFilters from '../to-do-list/TodoListFilters';

export default function Aside(): React.ReactElement {
  return (
    <Flex flexDirection="column" gap={4}>
      <Box px={6} pt={4}>
        <p className="logo">TO</p>
        <p className="logo do">DO</p>
      </Box>
      <Divider />
      <TodoListFilters />
    </Flex>
  );
}
