import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

import PlotView from './PlotView';
import Connectors from './Connectors';


const styles = {
  container: {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'stretch', 
    height: '100vh'
  },
  header:{
    flex: 'flex-shrink'
  },
  plot: {
    flex: 'flex-grow'
  },
  footer:{
    flex: 'flex-shrink'
  }
}
const App = () => (
    <div style={styles.container} >
      <Header style={styles.header} title='UrgBenriWeb' />
      <Sidebar width={300}>
        <Connectors />
      </Sidebar>
      <PlotView style={styles.plot} />
      <Footer style={styles.footer} />
    </div>
)

export default App
