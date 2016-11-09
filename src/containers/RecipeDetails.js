import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '../actions/formActions';
import * as recipeActions from '../actions/recipeActions';

class RecipeDetails extends Component {
  constructor(props) {
    super(props);
    this.handleRemoveClick = this.handleRemoveClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }
  handleCancelClick() {
    const { formActions } = this.props;
    formActions.showRecipeDetail(false);
  }
  handleRemoveClick() {
    const { recipeActions, formActions, showRecipeDetail } = this.props;
    recipeActions.removeRecipe(this.props.showRecipeDetail);
    formActions.showRecipeDetail(false);
  }
  handleEditClick() {
    const { formActions } = this.props;
    const { showRecipeDetail, showEditForm } = formActions;
    showRecipeDetail(false);
    showEditForm(this.props.showRecipeDetail);
  }
  render() {
    const { recipes, showRecipeDetail } = this.props;
    const recipeToShow = recipes[showRecipeDetail];
    const { image, serves, ingredients, instructions, name } = recipeToShow;

    const detailStyles = {
      background: `linear-gradient(rgba(0, 0, 0, 0.498039), rgba(0, 0, 0, 0.498039)), url(${image}) no-repeat center`,
      backgroundSize: 'cover'
    }
    return (
      <div className="recipe-details">
        <div className="recipe-details__header" style={detailStyles}>
          <span>{name}</span>
        </div>
        <div className="recipe-details__content">
          <div className="recipe-details__item">
            <h3>Serves: </h3>
            <span>{serves}</span>
          </div>
          <div className="recipe-details__item">
            <h3>Ingredients: </h3>
            <div className="ingredient-list">
              {ingredients.map((ingredient, i) => <span className="ingredient-list__ingredient" key={i}>{ingredient}</span>)}
            </div>
          </div>
          <div className="recipe-details__item">
            <h3>Instructions: </h3>
            <p className="recipe-details__instructions">{instructions}</p>
          </div>
          <div className="button-group">
            <span className="btn btn-form" onClick={this.handleCancelClick}>Cancel</span>
            <span className="btn btn-form" onClick={this.handleEditClick}>Edit</span>
            <span className="btn btn-form btn-danger" onClick={this.handleRemoveClick}>Remove</span>
          </div>
        </div>
      </div>
    );
  }
}

RecipeDetails.propTypes = {

}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes,
    showRecipeDetail: state.UIState.showRecipeDetail
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    formActions: bindActionCreators(formActions, dispatch),
    recipeActions: bindActionCreators(recipeActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetails);
