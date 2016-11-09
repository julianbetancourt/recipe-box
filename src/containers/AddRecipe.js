import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '../actions/formActions';


class AddRecipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handleAddClick = this.handleAddClick.bind(this);
  }
  handleAddClick() {
    this.props.actions.showAddForm(true);
  }
  render() {
    const { actions } = this.props;
    return (
      <div className="item item--add" onClick={this.handleAddClick}>
        <div className="ion-plus"></div>
      </div>
    );
  }
}

AddRecipe.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(formActions, dispatch)
});



export default connect(null, mapDispatchToProps)(AddRecipe);
