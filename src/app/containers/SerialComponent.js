import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import SerialConnection from '../components/SerialConnection';

export const SerialComponent = () => (
  <div>
    <SerialConnection />
  </div>
)

SerialComponent.propTypes = {
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SerialComponent)