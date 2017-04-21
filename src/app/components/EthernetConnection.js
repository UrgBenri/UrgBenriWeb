import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline';
import ActionLabel from 'material-ui/svg-icons/action/label';
import Subheader from 'material-ui/Subheader';

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
class EthernetConnection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      connected: false,
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
          <TextField
            ref={(input) => { this.textInput = input; }}
            style={styles.textField}
            hintText="192.168.0.10"
            floatingLabelText="IP Address"
          />
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

export default EthernetConnection;