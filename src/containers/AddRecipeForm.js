import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as formActions from '../actions/formActions';
import * as recipeActions from '../actions/recipeActions';


class RecipeForm extends Component {
  constructor(props) {
    super(props);
    this.handleCancelClick = this.handleCancelClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentDidMount() {
    document.body.style.overflow = 'hidden'
  }
  componentWillUnmount() {
    document.body.style.overflow = 'initial'
  }
  handleCancelClick(e) {
    e.preventDefault();
    this.props.formActions.showAddForm(false);
  }
  parseIngredients(str) {
    return str.split(",").map(ingredient => ingredient.trim());
  }
  handleSubmit(e) {
    e.preventDefault();
    const { name, serves, image, ingredients, instructions } = this.refs;
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
      this.props.recipeActions.addRecipe(form);
      this.props.formActions.showAddForm(false);
    } else {
      alert('Please enter all the required fields');
    }

  }
  render() {
    return (
      <form className="recipe-form" onSubmit={this.handleSubmit}>
        <h2>New Recipe</h2>
        <div className="input-group">
          <label htmlFor="name">Name: </label>
          <input type="text" id="name" ref="name"/>
        </div>
        <div className="input-group">
          <label htmlFor="serves">Serves: </label>
          <input type="number" id="serves" ref="serves"/>
        </div>
        <div className="input-group">
          <label htmlFor="ingredients">Ingredients: </label>
          <textarea name="ingredients" id="ingredients" placeholder="Enter, ingredients, separated, by, commas"  ref="ingredients" rows="2"></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="instructions">Instructions: </label>
          <textarea name="instructions" id="instructions" ref="instructions" rows="5"></textarea>
        </div>
        <div className="input-group">
          <label htmlFor="image">Image URL (Optional): </label>
          <input type="text" id="image" ref="image" />
        </div>
        <div className="button-group">
          <span className="btn btn-form" onClick={this.handleCancelClick}>Cancel</span>
          <button className="btn btn-form" type="submit">Submit</button>
        </div>
      </form>
    );
  }
}

RecipeForm.propTypes = {
  formActions: PropTypes.object.isRequired,
  recipeActions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    formActions: bindActionCreators(formActions, dispatch),
    recipeActions: bindActionCreators(recipeActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(RecipeForm);
