import React from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import { toggleSidebar } from '../actions';

export const Sidebar = ({ width, open, onClose, children }) => (
  <div>
    <Drawer
        docked={false}
        width={width}
        open={open}
        onRequestChange={onClose}
      >
      {children}
    </Drawer>
  </div>
)

Sidebar.propTypes = {
  width: PropTypes.number.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {
    open: state.sidebar
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onClose: toggleSidebar
  }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar)
