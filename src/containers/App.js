import React, { Component } from 'react';
import AddRecipe from './AddRecipe';
import AddRecipeForm from './AddRecipeForm';
import RecipeList from './RecipeList';
import RecipeDetails from './RecipeDetails';
import RecipeItem from './RecipeItem';
import EditRecipeForm from './EditRecipeForm';
import Overlay from './Overlay';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }
  renderDetailForm() {
    const { showRecipeDetail } = this.props;
    if (showRecipeDetail || showRecipeDetail === 0) {
      return <div className="modal"><Overlay /><RecipeDetails /></div>
    } else {
      return null;
    }
  }
  renderAddForm() {
    const { showAddForm } = this.props;
    if (showAddForm) {
      return <div className="modal"><Overlay /><AddRecipeForm /></div>
    } else {
      return null;
    }
  }
  renderEditForm() {
    const { showEditForm } = this.props;
    if (showEditForm || showEditForm === 0) {
      return <div className="modal"><Overlay /><EditRecipeForm /></div>
    } else {
      return null;
    }
  }
  render() {
    return (
      <div className="App">
        <header>
          <h1>Recipe Box</h1>
        </header>
        <div className="item-list">
          <AddRecipe />
            {
              this.props.recipes.map((recipe, i) => {
                return <RecipeItem {...recipe} key={i} i={i}/>
              })
            }
        </div>
        {this.renderAddForm()}
        {this.renderDetailForm()}
        {this.renderEditForm()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { UIState, recipes } = state;
  const { showAddForm, showRecipeDetail, showEditForm } = UIState
  return {
    showAddForm,
    showRecipeDetail,
    showEditForm,
    recipes
  }
}

export default connect(mapStateToProps)(App);
