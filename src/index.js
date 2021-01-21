import React from 'react';
import ReactDOM from 'react-dom';
import store from 'components/store/store';
import { Provider } from 'react-redux';
import firebaseConfig from 'config/fbConfig';
import App from './App';

console.log(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
