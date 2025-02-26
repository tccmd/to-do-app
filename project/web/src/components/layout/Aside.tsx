import { Box, Divider, Flex } from '@chakra-ui/react';
import TodoListFilters from '../to-do-list/TodoListFilters';

export default function Aside(): React.ReactElement {
  return (
    <Flex flexDirection="column" gap={4}>
      <Box aria-label="Todo App 로고" tabIndex={0} as="a" href="/" px={6} pt={4} maxW={100}>
        <p className="logo">TO</p>
        <p className="logo do">DO</p>
      </Box>
      <Divider aria-hidden="true" role="presentation" />
      <Box aria-label="Todo 필터">
        <TodoListFilters />
      </Box>
    </Flex>
  );
}
