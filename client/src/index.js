import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';  
import './sass/styles.css';
import App from './App';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Header />
        <App />
        <Footer />
      </div>
    </ConnectedRouter>
  </Provider>

  , document.getElementById('root'));
registerServiceWorker();
