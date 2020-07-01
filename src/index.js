import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/index';
import store from './redux/store';
import { Provider } from 'react-redux';
import './styles.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
