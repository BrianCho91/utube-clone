import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import Icon from '@material-ui/core/Icon'
// import {search} from '@material-ui/icons';
import SideDrawer from '../header/side_drawer';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideDrawerOpen: false
    }
    this.sideDrawerClickHandler = this.sideDrawerClickHandler.bind(this)
    this.signupLoginLink = this.signupLoginLink.bind(this)
  }

  sideDrawerClickHandler() {
    this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}
    });
  }

  sideDrawerToggle() {
    let sideDrawer;
    // let modal;
    console.log("toggled")
    console.log(this.state.sideDrawerOpen)
    if (this.state.sideDrawerOpen) {
      return sideDrawer = <SideDrawer
                            show={this.state.sideDrawerOpen} 
                            sideDrawerClickHandler={this.sideDrawerClickHandler}
                          />;
    }
  }


  signupLoginLink() {
    if (this.props.currentUser) {
      return (
        <div className="user-profile-icon" onClick={this.props.logout}>
          <FontAwesomeIcon className="faIcons" icon={faUserCircle} />
        </div>
      )
    } else {
      return (
      <Link to='/login' className="user-profile-icon-signin">
        <FontAwesomeIcon className="faIcons" icon={faUserCircle} />
        &nbsp;<span>Sign In</span>
      </Link>
      )
    }
  }

  userIconContainerSize() {
    if (this.props.currentUser) {
      return "user-icons-container"
    } else {
      return "user-icons-container-login"
    }
  }

  render() {

    return(
      <div>
        {this.sideDrawerToggle()}
        <div className="header">
          <div className="home-icons-container">
            <button>
              <FontAwesomeIcon className="faIcons" id="faBars" icon={faBars} onClick={this.sideDrawerClickHandler}/>
            </button>
            <button>
              <div className="uTube-icon">
                <FontAwesomeIcon className="faYoutube" icon={faYoutube} />
                <span className="uTube-icon-letters">uTube</span>
              </div>
            </button>
            {/* <img id="logo" src="https://i.ytimg.com/vi/216xvaj_OAA/maxresdefault.jpg" alt=""/> */}
          </div>

          <div className="header-search-container">
            <div className="header-search-bar">Search</div>
            <div className="header-search-button">
            <FontAwesomeIcon className="faSearch" icon={faSearch} />
              {/* <i id="search" className="large material-icons">search</i> */}
            </div>
          </div>

          <div className={this.userIconContainerSize()}>
            <div className="create-post-icon">
              <FontAwesomeIcon className="faIcons" icon={faVideo} />
              {/* <i id="video_call" className="large material-icons">video_call</i> */}
            </div>
            <div className="messages-icon">
              <FontAwesomeIcon className="faIcons" icon={faEnvelope} />
              {/* <i id="mail" className="large material-icons">mail</i> */}
            </div>
            <div className="alerts-icon">
              <FontAwesomeIcon className="faIcons" icon={faBell} />
              {/* <i id="add_alert" className="large material-icons">add_alert</i> */}
            </div>
            {this.signupLoginLink()}
            {/* <div className="user-profile-icon">
              <FontAwesomeIcon className="faIcons" icon={faUserCircle} /> */}
              {/* <i id="person" className="large material-icons">person</i> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;