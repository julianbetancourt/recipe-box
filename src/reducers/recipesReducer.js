import initialState from './initialState';
import * as types from '../actions/actionTypes';

const recipes = (state = initialState.recipes, action) => {
  switch (action.type) {
    case types.ADD_RECIPE:
      const { name, time, ingredients, instructions, image } = action.payload;
      const noImage = 'https://www.homemadebyyou.co.uk/assets/shared/lazy-load-placeholder.png';
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
