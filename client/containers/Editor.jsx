require('codemirror/mode/javascript/javascript');
import React, { Component } from "react";
import { connect } from "react-redux";
import { UnControlled as CodeMirror } from "react-codemirror2";
import socketIOClient from 'socket.io-client';
const ENDPOINT = "http://localhost:3000";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      code: ''
    }
    // Socket io
    const socket = socketIOClient(ENDPOINT);
    socket.on('receive code', (msg) => {
      this.updateCodeFromSockets(msg)
    });
    this.emitter = this.emitter.bind(this);
    this.updateCodeFromSockets = this.updateCodeFromSockets.bind(this);
  }
  // When socket receives message, add it to Codemirror editor
  
  emitter(editor, data, value) {
    // Emit code change to socket
    socket.emit('code change', value);
  }  
  
  updateCodeFromSockets(payload) {
    this.setState({code: payload})
  }

  render() {
    return (
        <CodeMirror
        id='editor'
        value={this.state.code}
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={this.emitter}
      />
    );
  }
}

export default Editor;
