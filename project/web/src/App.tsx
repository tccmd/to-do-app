import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import CommonLayout from './components/layout/CommonLayout';
import { TodoTask } from './components/layout/TodoTask';
import './style.css';
import chakraTheme from './theme';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

export const App = (): React.ReactElement => (
  <RecoilRoot>
    <ApolloProvider client={apolloClient}>
      <ChakraProvider theme={chakraTheme}>
        <CommonLayout>
          <TodoTask />
        </CommonLayout>
      </ChakraProvider>
    </ApolloProvider>
  </RecoilRoot>
);
