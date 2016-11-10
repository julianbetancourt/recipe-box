import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '../actions/formActions';


class AddRecipeButton extends Component {
  constructor(props) {
    super(props);
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  handleAddClick() {
    this.props.formActions.showAddForm(true);
  }
  render() {
    return (
      <div className="item item--add" onClick={this.handleAddClick}>
        <div className="ion-plus"></div>
      </div>
    );
  }
}

AddRecipeButton.propTypes = {
  formActions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => ({
  formActions: bindActionCreators(formActions, dispatch)
});

export default connect(null, mapDispatchToProps)(AddRecipeButton);
