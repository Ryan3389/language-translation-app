import AuthComponent from './components/AuthComponent';
import { Outlet } from 'react-router-dom'

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

import '../src/App.css'

//sets the endpoint for where graphql mutations/queries should be sent to
const httpLink = createHttpLink({
  uri: 'https://speakeasytranslate.netlify.app/graphql'
})

//Modify the graphql request to apollo server. Adds the jwt token to the header to ensure the user is verified on the backend
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

//add auth header to request, send requests to /graphql endpoint, in this order
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Outlet />
    </ApolloProvider>
  )
}

export default App