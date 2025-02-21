import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import CommonLayout from './components/layout/CommonLayout';
import { TodoTask } from './components/layout/TodoTask';
import theme from './theme';

export const App = (): React.ReactElement => (
  <RecoilRoot>
    <ChakraProvider theme={theme}>
      <CommonLayout>
        <TodoTask />
      </CommonLayout>
    </ChakraProvider>
  </RecoilRoot>
);
