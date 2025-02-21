import { Box, Divider, Flex } from '@chakra-ui/react';
import Aside from './Aside';
import Navbar from './Navbar';

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps): React.ReactElement {
  return (
    <Box pt={4} mx="auto" maxW="96%" minH="100vh" w="100%">
      <Flex>
        <Box flex="1" h="100vh" display={{ base: 'none', md: 'block' }}>
          <Aside />
        </Box>
        <Box flex="3">
          <Navbar />
          <Divider />
          <Box p={4}>{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
}
