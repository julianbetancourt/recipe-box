import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formActions from '../actions/formActions';

class Overlay extends Component {
  constructor(props) {
    super(props);
    this.handleOverlayClick = this.handleOverlayClick.bind(this);
  }
  handleOverlayClick() {
    this.props.actions.showAddForm(false);
    this.props.actions.showRecipeDetail(false);
    this.props.actions.showEditForm(false);
  }
  render() {
    return (
      <div className="overlay" onClick={this.handleOverlayClick} />
    );
  }
}

Overlay.propTypes = {
  actions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(formActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Overlay);
