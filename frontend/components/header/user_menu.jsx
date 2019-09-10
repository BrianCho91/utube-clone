import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faFolder, faLayerGroup, faUserCircle, faSignOutAlt, faAddressCard } from '@fortawesome/free-solid-svg-icons'

class UserMenu extends React.Component {
  constructor(props) {
    super(props);
    this.userMenuClass = this.userMenuClass.bind(this);
  }

  userMenuClass() {
    return this.props.show ? "userMenu-show" : "userMenu-hide"
  }

  render() {

    return(
      <div className="user-menu-container">
        <div className="user-details-container">
          <div className="user-menu-user-pic">
            <FontAwesomeIcon className="faIcons" id="faUserCircle" icon={faUserCircle}/>
          </div>
          <div className="user-details">
            <p id="username">
            {this.props.user.username}
            </p>
            <p id="email">
            {this.props.user.email}
            </p>
          </div>
        </div>
        <div className="user-menu-additional">
          <div className="user-menu-buttons">
            <div className="channel-button">
              <FontAwesomeIcon className="faUserMenuIcons" icon={faAddressCard}/>
              <span id="user-menu-text">
                Your channel
              </span>
            </div>
            <div className="signout-button" onClick={this.props.logout}>
              <FontAwesomeIcon className="faUserMenuIcons" icon={faSignOutAlt}/>
              <span id="user-menu-text">
                Sign out
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserMenu;