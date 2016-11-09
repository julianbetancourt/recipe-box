import * as types from './actionTypes';

export const showAddForm = (payload) => ({
  type: types.SHOW_ADD_FORM,
  payload
});

export const showRecipeDetail = (payload) => ({
  type: types.SHOW_RECIPE_DETAIL,
  payload
});

export const showEditForm = (payload) => ({
  type: types.SHOW_EDIT_FORM,
  payload
});
