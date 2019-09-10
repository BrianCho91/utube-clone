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
    this.handleDemo = this.handleDemo.bind(this);
    this.setUsername = this.setUsername.bind(this);
    this.setPassword = this.setPassword.bind(this);
  };

  handleDemo(e) {
    e.preventDefault()
  
    let newUsername = this.setUsername();
    let newPassword = this.setPassword();

    setInterval( this.setState({
        username: newUsername,
        password: newPassword
      }), 101)
    setTimeout(this.props.processForm(this.state), 900)
  }

  demoClickHandler() {

  }

  setUsername() {
    let demoUsername = ['b','r','i','a','n','c','h','o'];
    let newUsername = "";

    while (demoUsername.length > 0) {
      setInterval( () => {
        newUsername += demoUsername.shift()
      }, 100)
    }
    return newUsername;
  }

  setPassword() {
    let demoPassword = [1,2,3,1,2,3];
    let newPassword = "";

     while (demoPassword.length > 0) {
      setInterval( () => {
        newPassword += demoPassword.shift()
      }, 100)
    }
    return newPassword;
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
            <button className="login-submit" id="demo" onClick={this.handleDemo}> Demo </button>
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