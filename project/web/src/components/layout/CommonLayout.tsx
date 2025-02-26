import { Box, Divider, Flex } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import Aside from './Aside';
import Navbar from './Navbar';

interface CommonLayoutProps {
  children: React.ReactNode;
}

export default function CommonLayout({ children }: CommonLayoutProps): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>To Do App</title>
        <meta name="description" content="Todo App meta data description" />
        <meta name="keywords" content="Todo App meta data keywords" />

        {/* 오픈그래프 */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Todo App og title" />
        <meta property="og:keyword" content="Todo App og keyword" />
        <meta property="og:description" content="Todo App og description" />
        <meta property="og:image" content="https://todo-web-nu.vercel.app/logo512.png" />
        <meta property="og:url" content="https://todo-web-nu.vercel.app" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="wrwerewrewrewr" />
        <meta name="twitter:title" content="Todo App twitter title" />
        <meta name="twitter:description" content="Todo App twitter description" />
        <meta name="twitter:image" content="https://todo-web-nu.vercel.app/logo512.png" />
      </Helmet>
      <Box mx="auto" minH="100vh" w="100%">
        <Flex>
          <Box
            aria-label="사이드바 내비게이션"
            as="aside"
            flex="1"
            maxW="255px"
            h="100vh"
            display={{ base: 'none', md: 'block' }}
          >
            <Aside />
          </Box>
          <Box aria-hidden="true" role="presentation">
            <Divider orientation="vertical" />
          </Box>
          <Box flex="3">
            <Box aria-label="내비게이션바" as="header">
              <Navbar />
            </Box>
            <Divider />
            <Box aria-label="메인 컨텐츠" as="main">
              {children}
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
