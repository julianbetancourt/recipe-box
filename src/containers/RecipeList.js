import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import RecipeItem from './RecipeItem';

class RecipeList extends Component {
  render() {
    return (
      <div className="recipe-list">
        {
          this.props.recipes.map((recipe, i) => {
            return <RecipeItem {...recipe} key={i} i={i}/>
          })
        }
      </div>
    );
  }
}

RecipeList.propTypes = {
  recipes: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
  return {
    recipes: state.recipes
  }
}

export default connect(mapStateToProps)(RecipeList);
