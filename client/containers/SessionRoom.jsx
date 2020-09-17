import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import our children components

// import actions
import * as actions from '../actions/actions.js';
import Editor from './Editor.jsx';

// mapStateToProps
const mapStateToProps = state => ({
  // add pertinent state here, auto given store state
  username: state.main.currentUser.username,
})

const mapDispatchToProps = dispatch => ({
  dummy: () => dispatch(actions.dummy()),
})

class SessionRoom extends Component {
  constructor(props) {
    super(props);
  }

  // render Logo and LoginForm Component
  render() {

    return(
      <div className="waiting-room-container">
        <span className="login-logo">pair/a\dice</span>
      <div className="greeting">
        <center>
          User meet Partner, Partner meet User.<br /><br />
          Please follow the links to Pair-Program!<br /><br /><br />
        </center>
        <div className="sessions-links">
          <center>
            <a href="https://hangouts.google.com/call/fje6hzvFsddAlpEn1VHoACEA">Video Chat</a><br /><br />
            {/* <a href="https://codesandbox.io/s/serene-bhabha-0s83d">Sandbox</a><br /><br /> */}
            <pre>
              <code>
                {/* Coding problem that appears on page */}
                <span>"Write a program that prints the numbers from 1 to 100. <br />
                But for multiples of three print “Fizz” instead of the number and <br />
                for the multiples of five print “Buzz”. For numbers which are multiples <br />
                of both three and five print “FizzBuzz”."</span>
              </code>
            </pre>
          </center>
        </div>
        <div><Editor/></div>
        <div className="level-language-form">
          <Link to="/waiting-room" className="session-room-link"><br /><br />
          <center>
            <button
                id="session-room-button"
                type="button"
                // onClick={() => this.props.findPartner()}
            >END SESSION</button></center>
          </Link>
          </div>
        </div>
    </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SessionRoom));