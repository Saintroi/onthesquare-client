import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import config from './config';

import './index.css';

import registerServiceWorker from './serviceWorker';

const client = new ApolloClient({
  uri: config.serverUrl + '/graphql',
  request: operation => {
    operation.setContext(context => ({
      headers: {
        ...context.headers
      }
    }));
  }
});

ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>,
  document.getElementById('root')
);

registerServiceWorker();
