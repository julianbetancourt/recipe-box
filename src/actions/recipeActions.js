import * as types from './actionTypes';

export const addRecipe = (payload) => ({
  type: types.ADD_RECIPE,
  payload
});

export const removeRecipe = (i) => ({
  type: types.REMOVE_RECIPE,
  i
});

export const editRecipe = (i, payload) => ({
  type: types.EDIT_RECIPE,
  i,
  payload
});
