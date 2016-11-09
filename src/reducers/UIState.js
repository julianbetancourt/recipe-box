import initialState from './initialState';
import * as types from '../actions/actionTypes';

const UIState = (state = initialState.UIState, action) => {
  switch (action.type) {
    case types.SHOW_ADD_FORM:
      return Object.assign({}, state, {
        showAddForm: action.payload
      });
    case types.SHOW_RECIPE_DETAIL:
      return Object.assign({}, state, {
        showRecipeDetail: action.payload
      });
    case types.SHOW_EDIT_FORM:
      return Object.assign({}, state, {
        showEditForm: action.payload
      });
    default:
      return state;
  }
}

export default UIState;
