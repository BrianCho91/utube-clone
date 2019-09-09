import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInput(type) {
    return(e) => {
      this.setState({ [type]: e.target.value})
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state)
  }

  formText() {
    let formType = this.props.formType;
    return formType === "login" ? "Log In" : "Sign Up"
  }

  renderEmail() {
    let formType = this.props.formType;
    if (formType === "signup") {
      return (
        <label className="login-label">Email
          <br/>
          <input 
            type="text" 
            onChange={this.handleInput('email')} 
            value={this.state.email}
          />
        </label>
      )
    }
  }

  render() {

    return (
      <div className="session-form-container">
        <div className="session-form">
          <h1 className="login-text">{this.formText()}! or&nbsp; {this.props.navLink}</h1>
          <br/><br/>
          <form>
            <label className="login-label">Username
              <br/>
              <input 
                type="text"
                onChange={this.handleInput('username')} 
                value={this.state.username}
              />
            </label><br/><br/>

            {this.renderEmail()}

            {/* <label>Email:
              <br/>
              <input 
                type="text" 
                onChange={this.handleInput('email')} 
                value={this.state.email}
              />
            </label><br/> */}
            <br/><br/>
            <label className="login-label">Password
              <br/>
              <input 
                type="password" 
                onChange={this.handleInput('password')} 
                value={this.state.password}
              />
            </label><br/><br/>
            <button className="login-submit" onClick={this.handleSubmit}>{this.formText()}</button>
          </form>
        </div>
        <Link to="/" className="return-home">
          Go Home
        </Link>
      </div>
    )
  }
}

export default SessionForm;