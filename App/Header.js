import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import { toggleSidebar } from '../actions'


export const Header = ({style, title, onMenuTap}) => (
  <header style={style}>
  <AppBar
    title={title}
    onLeftIconButtonTouchTap={onMenuTap}
    iconElementLeft={<IconButton ><NavigationMenu /></IconButton>}
    iconElementRight={<IconButton ><MoreVertIcon /></IconButton>}
  />
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired,
  onMenuTap: PropTypes.func.isRequired
}


const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onMenuTap: toggleSidebar
  }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)
