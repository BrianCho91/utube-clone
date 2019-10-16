import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faFolder, faLayerGroup } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return(
      <div className="sidebar-main">
        <div className="sidebar">
          <div className="sidebar-icon-container" >
            <Link to='/' className="sidebar-container-icon">  
              <FontAwesomeIcon className="faIcons" icon={faHome} />
              <p>Home</p>
            </Link>

            <div className="sidebar-container-icon">
              <FontAwesomeIcon className="faIcons" icon={faLinkedin} />
              <p>LinkedIn</p>
            </div>

            <div className="sidebar-container-icon">
              <FontAwesomeIcon className="faIcons" icon={faGithubSquare} />
              <p>GitHub</p>
            </div>

            {/* <div className="sidebar-container-icon">
              <FontAwesomeIcon className="faIcons" icon={faFire} />
              <p>Trending</p>
            </div>

            <div className="sidebar-container-icon">
              <FontAwesomeIcon className="faIcons" icon={faLayerGroup} />
              <p>Subscriptions</p>
            </div>

            <div className="sidebar-container-icon">
              <FontAwesomeIcon className="faIcons" icon={faFolder} />
              <p>Library</p>
            </div> */}

          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;