import initialState from './initialState';
import * as types from '../actions/actionTypes';

const recipes = (state = initialState.recipes, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      const { name, time, ingredients, instructions, image } = action.payload;
      const noImage = 'https://dwy5pyore8iyb.cloudfront.net/prod/resized/900x600/2015/6/26/0/08e5ff5c-3f86-4bd3-9839-b58a3513f3ff_TI-placeholder-image-eat-and-drink-generic.jpg';
      return [
        ...state,
        {
          name,
          time,
          ingredients,
          instructions,
          image: image || noImage
        }
      ]
    case types.REMOVE_RECIPE:
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]
    case types.EDIT_RECIPE:
      const newState = [ ...state ];
      newState[action.i] = action.payload;
      return newState;
    default:
      return state;
  }
}

export default recipes;
