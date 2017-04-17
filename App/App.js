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
    <div>
      <Header title='UrgBenriWeb' />
      <Sidebar width={300}>
        <Connectors />
      </Sidebar>
      <PlotView width={400} height={400}/>
      <Footer />
    </div>
  </MuiThemeProvider>
)

export default App
