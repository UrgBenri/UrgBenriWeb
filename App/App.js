import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

import PlotView from '../containers/PlotView';
import Connectors from '../containers/Connectors';

injectTapEventPlugin();

const App = () => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100vh'}}>
      <Header style={{flex: 'flex-shrink'}} title='UrgBenriWeb' />
      <Sidebar width={300}>
        <Connectors />
      </Sidebar>
      <PlotView 
          style={{flex: 'flex-grow'}}
      />
      <Footer style={{flex: 'flex-shrink'}}/>
    </div>
  </MuiThemeProvider>
)

export default App
