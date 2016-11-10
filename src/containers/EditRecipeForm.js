import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as formActions from '../actions/formActions';
import * as recipeActions from '../actions/recipeActions';


class EditRecipeForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleCancelClick(e) {
    e.preventDefault();
    this.props.formActions.showEditForm(false);
  }
  parseIngredients(str) {
    return str.split(",").map(ingredient => ingredient.trim());
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, serves, image, ingredients, instructions } = this.refs;
    const { recipeActions, formActions, showEditForm } = this.props;
    const noImage = 'https://dwy5pyore8iyb.cloudfront.net/prod/resized/900x600/2015/6/26/0/08e5ff5c-3f86-4bd3-9839-b58a3513f3ff_TI-placeholder-image-eat-and-drink-generic.jpg';
    const form = {
      name: name.value.trim(),
      serves: serves.value.trim(),
      ingredients: this.parseIngredients(ingredients.value),
      instructions: instructions.value.trim(),
      image: image.value.trim() || noImage
    }
    const isValid = Object.keys(form).every(field => {
      if (!form[field]) {return false}
      else {return true}
    });
    if (isValid) {
      recipeActions.editRecipe(showEditForm,form);
      formActions.showEditForm(false);
    } else {
      alert('Please enter all the required fields');
    }
  }
  render() {
    const { showEditForm, recipes } = this.props;
    const formToShow = recipes[showEditForm];
    const { image, serves, ingredients, instructions, name } = formToShow;

    return (
      <form className="recipe-form" onSubmit={this.handleSubmit}>
        <h2>Edit Recipe</h2>
        <div className="input-group">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" ref="name" defaultValue={name}/>
        </div>
        <div className="input-group">
          <label htmlFor="serves">Serves: </label>
          <input type="number" id="serves" ref="serves" defaultValue={serves}/>
        </div>

        <div className="input-group">
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea name="ingredients" id="ingredients" placeholder="Enter, ingredients, separated, by, commas" rows="2" ref="ingredients" defaultValue={ingredients}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="instructions">Instructions: </label>
          <textarea name="instructions" id="instructions" rows="5" ref="instructions" defaultValue={instructions}></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="image">Image URL (Optional): </label>
          <input type="text" id="image" ref="image" defaultValue={image}/>
        </div>
        <div className="button-group">
          <span className="btn btn-form" onClick={this.handleCancelClick}>Cancel</span>
          <button className="btn btn-form" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

EditRecipeForm.propTypes = {
  formActions: PropTypes.object.isRequired,
  recipeActions: PropTypes.object.isRequired,
  showEditForm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    showEditForm: state.UIState.showEditForm,
    recipes: state.recipes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formActions: bindActionCreators(formActions, dispatch),
    recipeActions: bindActionCreators(recipeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditRecipeForm);
