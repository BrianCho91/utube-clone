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
    this.setState({
      username: '',
      email: '',
      password: ''
    })
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
    return formType === "login" ? "Sign In" : "Sign Up"
  }

  renderEmail() {
    let formType = this.props.formType;
    if (formType === "signup") {
      return (
        <label className="login-label">
          <p className="login-input-text">Email</p>
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

  // resetErrors(type) {
  //   setTimeout(() => this.returnErrors(type), 1000)
  // } 
  
  renderDemo() {
    if (this.props.formType === "login") {
      return <button className="login-submit" id="demo-button" onClick={this.demoClickHandler}> Demo </button>
    }
  }

  renderCreateAccount() {
    if (this.props.formType === "login") {
      return (
        <div className="session-form-redirect-signup">
          <Link to="/signup">Create account</Link>
        </div>
        )
    } else {
      return (
        <div className="session-form-redirect-login">
          <Link to="/login">Sign in</Link>
        </div>
      )
    }
  }

  render() {
    // ! or&nbsp; {this.props.navLink}
    return (
      <div className="session-form-main">
        <div className="session-form-container">
          <div className="session-form">
            <Link to="/" >
              <h1 className="login-pretext">uTube</h1>
            </Link>
            <h2 className="login-text">{this.formText()}</h2>
            <h3 className="login-subtext">to continue to uTube</h3>
            <br/><br/>
            <form className="login-form" onSubmit={this.handleSubmit}>
              {this.returnErrors("Invalid Credentials")}
              <label className="login-label" id="username">
                <p className="login-input-text">Username</p>
                <input 
                  type="text"
                  onChange={this.handleInput('username')} 
                  value={this.state.username}
                /><br/>
                {this.returnErrors("Username can't be blank")}
              </label><br/><br/>

              {this.renderEmail()}

              {/* <label>Email:
                <input 
                  type="text" 
                  onChange={this.handleInput('email')} 
                  value={this.state.email}
                />
              </label><br/> */}
              <br/><br/>
              <label className="login-label" id="password">
                <p className="login-input-text">Password</p>
                <input 
                  type="password" 
                  onChange={this.handleInput('password')} 
                  value={this.state.password} 
                /><br/>
                {this.returnErrors("Password is too short (minimum is 6 characters)")}
              </label><br/>
              <div className="login-buttons-containers">
                <div className="login-button-items">
                  <button className="login-submit" id="sign-in-button" onClick={this.handleSubmit}> {this.formText()} </button>
                  {this.renderDemo()}
                </div>
                {this.renderCreateAccount()}
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SessionForm;