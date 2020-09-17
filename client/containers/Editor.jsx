require('codemirror/mode/javascript/javascript');
import React, { Component } from "react";
import { connect } from "react-redux";
import { UnControlled as CodeMirror } from "react-codemirror2";

class Editor extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <CodeMirror
        value=''
        options={{
          mode: 'javascript',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {value}}
      />
    );
  }
}

export default Editor;
