import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';

// import our children components
// import AccountInfo from '../components/AccountInfo.jsx'
// import LevelLanguageForm from '../components/LevelLanguageForm.jsx'

// import actions
import * as actions from '../actions/actions.js';

// mapStateToProps
const mapStateToProps = state => ({
  username: state.main.currentUser.username,
  sessionCount: state.main.currentUser.sessioncount
})

const mapDispatchToProps = dispatch => ({
  // addUser: (newUser) => dispatch(actions.addUser(newUser)),
  // updateLanguageLevelStatus: (languageLevelStatus) => dispatch(actions.updateLanguageLevelStatus(languageLevelStatus)),
  findPartner: () => dispatch(actions.findPartner()),
  // incrementSessionCount: () => dispatch(actions.incrementSessionCount()),

})

class WaitingRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: 'off',
    }
  }

  componentDidMount() {
    this.setState({ toggle: 'on' })
  }
  // render Logo and LoginForm Component
  render() {
    
    console.log(this.state.toggle)

    return(
      <div className="waiting-room-container">
        {/* <span className="waiting-room-navbar"> */}
          <span className="login-logo">pair/a\dice</span>
        {/* </span> */}
        <div className="greeting">
          <center>
            Hello Friend,<br /><br />
            Please choose a level and language!<br />
          </center>
        </div>
        <div className="drop-down">
          <span className="selectors">
            <select className="skill-selector">
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
            <select className="language-selector">
              <option value="Javascript">Javascript</option>
              <option value="Python">Python</option>
              <option value="C">C</option>
            </select>
          </span>
        </div>
        <div className="level-language-form">
          <Link to="/session-room" className="session-room-link">
            <button
                id="waiting-room-button"
                type="button"
                // onClick={() => this.props.findPartner()}
            >FIND PARTNER</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(WaitingRoom));