import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faFire, faFolder, faLayerGroup, faHistory, faClock, faThumbsUp } from '@fortawesome/free-solid-svg-icons'


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
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon id="faHome-icon" className="drawer-faIcons" icon={faHome} />
              {/* <i id="menu-sidebar-home" className="large material-icons">home</i> */}
              <span>Home</span><br/>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon id="faFire-icon" className="drawer-faIcons" icon={faFire} />
              {/* <i id="menu-sidebar-whatshot" className="large material-icons">whatshot</i> */}
              <span>Trending</span><br/>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faLayerGroup} />
              {/* <i id="menu-sidebar-subscriptions" className="large material-icons">subscriptions</i> */}
              <span>Subscriptions</span><br/>
            </div>
          </div>
        </div>
      
        <div className="menu-sidebar-LHWL">
          <div className="menu-sidebar-sidebar-icon-container">
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faFolder} />
              {/* <i id="menu-sidebar-folder" className="large material-icons">folder</i> */}
              <span>Library</span>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faHistory} />
              {/* <i id="menu-sidebar-history" className="large material-icons">history</i> */}
              <span>History</span>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faClock} />
              {/* <i id="menu-sidebar-watch_later" className="large material-icons">watch_later</i> */}
              <span>Watch later</span>
            </div>
            <div className="menu-sidebar-icon-container-containers">
              <FontAwesomeIcon className="drawer-faIcons" icon={faThumbsUp} />
              {/* <i id="menu-sidebar-thumb_up" className="large material-icons">thumb_up</i> */}
              <span>Liked Videos</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default SideDrawer;