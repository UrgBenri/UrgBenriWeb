import React from 'react';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import IconButton from 'material-ui/IconButton';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline';
import ActionLabel from 'material-ui/svg-icons/action/label';

const styles = {
    container: {
      margin: 5,
      padding: 5,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    textField: {
        flexGrow: 11
    },
    iconButton: {
        flexGrow: 11
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
  
  render() {
    return (
      <Paper 
        style={styles.container}
        zDepth={1} 
      >
        <TextField
        style={styles.textField}
            hintText="192.168.0.10"
            floatingLabelText="IP Address"
        />
        <IconButton style={styles.iconButton} >
          {this.state.connected ? 
          (<ActionLabel onClick={this.handleConnect} />) : 
          (<ActionLabelOutline onClick={this.handleDisconnect} />)}
        </IconButton>
      </Paper>
    )
  }
}

export default EthernetConnection;