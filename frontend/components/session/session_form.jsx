import React from 'react';
import { Link } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoClickHandler = this.demoClickHandler.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  };

  demoClickHandler(e) {
    e.preventDefault()
    this.setUsername();
  }

  setUsername(demoUsername) {
    demoUsername = demoUsername || "briancho".split('');
    
    setTimeout( () => {
      this.setState({
        username: this.state.username + demoUsername.shift()
      });
      demoUsername.length > 0 ? this.setUsername(demoUsername) : this.setPassword()
    }, 100)

  }

  setPassword(demoPassword) {
    demoPassword = demoPassword || "123123".split('');

    setTimeout(() => {
      this.setState({
        password: this.state.password + demoPassword.shift()
      });
      demoPassword.length > 0 ? this.setPassword(demoPassword) : this.props.processForm(this.state)
    }, 100)

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
          /><br/>
          {this.returnErrors("Email can't be blank")}
        </label>
      )
    }
  }

  returnErrors(type) {
      if (this.props.errors.includes(type)) {
        let errorIdx = this.props.errors.indexOf(type);
        return <div className="error-messages">{this.props.errors[errorIdx]}</div>
      }
  }

  render() {
    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <div className="session-form">
            <h1 className="login-text">{this.formText()}! or&nbsp; {this.props.navLink}</h1>
            <br/><br/>
            <form>
              {this.returnErrors("Invalid Credentials")}
              <label className="login-label">Username
                <br/>
                <input 
                  type="text"
                  onChange={this.handleInput('username')} 
                  value={this.state.username}
                /><br/>
                {this.returnErrors("Username can't be blank")}
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
                /><br/>
                {this.returnErrors("Password is too short (minimum is 6 characters)")}
              </label><br/><br/>
              <button className="login-submit" onClick={this.handleSubmit}> {this.formText()} </button>
              <button className="login-submit" id="demo" onClick={this.demoClickHandler}> Demo </button>
            </form>
          </div>
          <Link to="/" className="return-home">
            Go Home
          </Link>
        </div>
      </div>
    )
  }
}

export default SessionForm;