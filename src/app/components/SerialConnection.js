import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline';
import ActionLabel from 'material-ui/svg-icons/action/label';
import Subheader from 'material-ui/Subheader';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const styles = {
    paper: {
      margin: 5,
      padding: 5,
    },
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    textField: {
        flexGrow: 2
    },
    iconButton: {
        flexGrow: 1
    }
};
class SerialConnection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      connected: false,
      port: 0,
      baudrate: 0
    };

    this.handleConnect =  this.handleConnect.bind(this);
    this.handleDisconnect =  this.handleDisconnect.bind(this);
  }

  handleConnect() {
    this.setState({
      connected: false
    });
  }
  handleDisconnect() {
    this.setState({
      connected: true
    });
  }

  handlePortChange = (event, index, port) => this.setState({port});
  handleBaudrateChange = (event, index, baudrate) => this.setState({baudrate});

  handleConnected() {
    
  }
  
  render() {
    return (
      <Paper 
        style={styles.paper}
        zDepth={2} 
      >
        <div
          style={styles.container}>
          <SelectField
            floatingLabelText="Port"
            value={this.state.port}
            onChange={this.handlePortChange}
          >
            <MenuItem value={1} primaryText="COM1" />
          </SelectField>
          <SelectField
            floatingLabelText="Baudrate"
            value={this.state.baudrate}
            onChange={this.handleBaudrateChange}
          >
            <MenuItem value={1} primaryText="15200" />
          </SelectField>
          <IconButton style={styles.iconButton} >
            {this.state.connected ? 
            (<ActionLabel onClick={this.handleConnect} />) : 
            (<ActionLabelOutline onClick={this.handleDisconnect} />)}
          </IconButton>
        </div>
      </Paper>
    )
  }
}

export default SerialConnection;