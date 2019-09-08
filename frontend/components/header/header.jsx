import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUserCircle, faBell, faEnvelope, faVideo } from '@fortawesome/free-solid-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
// import Icon from '@material-ui/core/Icon'
// import {search} from '@material-ui/icons';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="header">
        <div className="home-icons-container">
          <button>
            <FontAwesomeIcon className="faIcons" id="faBars" icon={faBars} onClick={this.props.sideDrawerClickHandler}/>
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
            <i id="search" className="large material-icons">search</i>
          </div>
        </div>

        <div className="user-icons-container">
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
          <div className="user-profile-icon">
            <FontAwesomeIcon className="faIcons" icon={faUserCircle} />
            {/* <i id="person" className="large material-icons">person</i> */}
          </div>
        </div>
      </div>
    )
  }
}

export default Header;