import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/Home';

const App = () => {
  return (
    <main>
      <Route exact path="/" component={Home} />
    </main>
  );
}

export default App;