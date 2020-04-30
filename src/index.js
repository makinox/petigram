import React from 'react';
import ReactDom from 'react-dom';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { App } from './App';

const cache = new InMemoryCache();

const link = new HttpLink({
  uri: 'https://petgram-server-makinox.makinoxx.now.sh/graphql',
});

const client = new ApolloClient({
  cache,
  link,
});

ReactDom.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);
