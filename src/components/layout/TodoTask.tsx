import { Box, Flex, Heading, useColorModeValue } from '@chakra-ui/react';
import ProgressOverview from '../to-do-list/ProgressOverview';
import TodoList from '../to-do-list/TodoList';

export function TodoTask(): React.ReactElement {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  return (
    <Box p={8} bg={bgColor} h="100vh">
      <Heading size="lg" pb={4}>
        Today&apos;s Tasks
      </Heading>
      <Flex flexDirection="column" p={4} gap={8}>
        <TodoList />
        <ProgressOverview />
      </Flex>
    </Box>
  );
}
