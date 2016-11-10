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
    const { formActions } = this.props;
    formActions.showAddForm(false);
    formActions.showRecipeDetail(false);
    formActions.showEditForm(false);
  }
  render() {
    return (
      <div className="overlay" onClick={this.handleOverlayClick} />
    );
  }
}

Overlay.propTypes = {
  formActions: PropTypes.object.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    formActions: bindActionCreators(formActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Overlay);
