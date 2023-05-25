import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBooks from './pages/SearchBooks';
import SavedBooks from './pages/SavedBooks';
import Navbar from './components/Navbar';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';


function App() {

const client = new ApolloClient({
  uri: 'http://your-apollo-server-endpoint',
  cache: new InMemoryCache(),
});

  return (
    <Router>
      <>
        <Navbar />
        <Switch>
        <ApolloProvider client={client}>
            
        </ApolloProvider>

          <Route exact path='/' component={SearchBooks} />
          <Route exact path='/saved' component={SavedBooks} />
          <Route render={() => <h1 className='display-2'>Wrong page!</h1>} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
