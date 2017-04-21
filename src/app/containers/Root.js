import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import App from './App';

injectTapEventPlugin();

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme()} >
      <App />
    </MuiThemeProvider>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
