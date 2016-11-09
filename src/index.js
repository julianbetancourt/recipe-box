import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import './styles/main.sass';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadState, saveState } from './store/localStorage';
import throttle from 'lodash/throttle';

const persistedState = loadState();

const store = configureStore(persistedState);

store.subscribe(throttle(() => {
  saveState({
    recipes: store.getState().recipes
  })
}, 1000));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
