import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '../actions/formActions';

class RecipeItem extends Component {
  constructor(props) {
    super(props);
    this.handleItemClick = this.handleItemClick.bind(this);
  }
  handleItemClick() {
    this.props.actions.showRecipeDetail(this.props.i);
  }
  render() {
    const itemStyles = {
      backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${this.props.image})`
    }
    return (
      <div className="item item--recipe" style={itemStyles} onClick={this.handleItemClick}>
        <span>{this.props.name}</span>
      </div>
    );
  }
}

RecipeItem.propTypes = {

}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(formActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(RecipeItem);
