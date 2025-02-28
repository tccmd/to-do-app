import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { ChakraProvider } from '@chakra-ui/react';
import { RecoilRoot } from 'recoil';
import CommonLayout from './components/layout/CommonLayout';
import { TodoTask } from './components/to-do-list/TodoTask';
import './css/style.css';
import chakraTheme from './theme';

const apolloClient = new ApolloClient({
  // uri: `${process.env.REACT_APP_API_HOST}/graphql`,
  uri: 'https://todo-server-coral-iota.vercel.app/graphql',
  cache: new InMemoryCache(),
});

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
