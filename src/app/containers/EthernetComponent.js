import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import EthernetConnection from '../components/EthernetConnection';

export const EthernetComponent = () => (
  <div>
    <EthernetConnection />
  </div>
)

EthernetComponent.propTypes = {
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(EthernetComponent)