import recipes from './recipesReducer';
import UIState from './UIState';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  recipes,
  UIState
});

export default rootReducer;
