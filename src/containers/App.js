import React, { Component, PropTypes } from 'react';
import AddRecipeButton from './AddRecipeButton';
import AddRecipeForm from './AddRecipeForm';
import RecipeDetails from './RecipeDetails';
import RecipeItem from './RecipeItem';
import EditRecipeForm from './EditRecipeForm';
import Overlay from './Overlay';
import { connect } from 'react-redux';

class App extends Component {

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
    const { recipes } = this.props;
    return (
      <div className="App">
        <header>
          <h1>Recipe Box</h1>
        </header>
        <div className="item-list">
          <AddRecipeButton />
            {
              recipes.map((recipe, i) => {
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

App.propTypes = {
  recipes: PropTypes.array.isRequired,
  showEditForm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
  showRecipeDetail: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired,
  showAddForm: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number
  ]).isRequired
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
