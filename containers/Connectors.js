import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import AppBar from 'material-ui/AppBar';
import {Tabs, Tab} from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import {toggleSidebar} from '../actions'

export const Connectors = ({onMenuTap}) => (
  <div>
    <AppBar
      title='Connectors'
      onRightIconButtonTouchTap={onMenuTap}
      iconElementLeft={<IconButton> </IconButton>}
      iconElementRight={<IconButton> <NavigationClose/> </IconButton>}/>
    <Tabs>
      <Tab label="Serial">
        <div>
          <h2>Tab One</h2>
          <p>
            This is an example tab.
          </p>
        </div>
      </Tab>
      <Tab label="Ethernet">
        <div>
          <h2>Tab Two</h2>
          <p>
            This is another example tab.
          </p>
        </div>
      </Tab>
      <Tab label="File">
        <div>
          <h2>Tab Three</h2>
          <p>
            This is a third example tab.
          </p>
        </div>
      </Tab>
    </Tabs>
  </div>
)

Connectors.propTypes = {
  onMenuTap: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    onMenuTap: toggleSidebar
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Connectors)