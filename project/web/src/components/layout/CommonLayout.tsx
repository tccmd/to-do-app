import { Box, Divider, Flex } from '@chakra-ui/react';
import Aside from './Aside';
import Navbar from './Navbar';

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps): React.ReactElement {
  return (
    <Box mx="auto" minH="100vh" w="100%">
      <Flex>
        <Box flex="1" maxW="255px" h="100vh" display={{ base: 'none', md: 'block' }}>
          <Aside />
        </Box>
        <Box>
          <Divider orientation="vertical" />
        </Box>
        <Box flex="3">
          <Navbar />
          <Divider />
          <Box>{children}</Box>
        </Box>
      </Flex>
    </Box>
  );
}
