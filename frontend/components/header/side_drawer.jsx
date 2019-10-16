import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFire, faFolder, faLayerGroup, faHistory, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';


class SideDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.sideDrawerClass = this.sideDrawerClass.bind(this);
  }

  sideDrawerClass() {
    return this.props.show ? "sideDrawer-show" : "sideDrawer-hide"
  }

  render() {

    return(
      <div id="sideDrawer" className={this.sideDrawerClass()}>
        <div className="menu-sidebar-HTS">
          <div className="menu-sidebar-sidebar-icon-container">
            <Link to='/'>  
              <div className="menu-sidebar-icon-container-containers">
                <FontAwesomeIcon id="faHome-icon" className="drawer-faIcons" icon={faHome} />
                {/* <i id="menu-sidebar-home" className="large material-icons">home</i> */}
                <span>Home</span><br/>
              </div>
            </Link>
            {/* <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon id="faFire-icon" className="drawer-faIcons" icon={faFire} />

              <span>Trending</span><br/>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faLayerGroup} />

              <span>Subscriptions</span><br/>
            </div> */}
          </div>
        </div>
      
        <div className="menu-sidebar-LHWL">
          <div className="menu-sidebar-sidebar-icon-container">
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faLinkedin} />
              <span>LinkedIn</span>
            </div> 

            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faGithubSquare} />
              <span>GitHub</span>
            </div> 

            {/* <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faFolder} />
              <span>Library</span>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faHistory} />
              <span>History</span>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faClock} />
              <span>Watch later</span>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faThumbsUp} />
              <span>Liked Videos</span>
            </div> */}
          </div>
        </div>
      </div>
    )
  }
}

export default SideDrawer;