//Import React
import React from 'react';
import ReactDOM from 'react-dom';

//Import Mounting Point
import App from './containers/App';

//Import Styles
import './styles/main.sass';

//Import Redux Related
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { loadState, saveState } from './store/localStorage';

//Import lodash
import throttle from 'lodash/throttle';

//Set Up Store
const persistedState = loadState();
const store = configureStore(persistedState);

store.subscribe(throttle(() => {
  saveState({
    recipes: store.getState().recipes
  })
}, 1000));


//Render App
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
