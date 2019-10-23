import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faFire, faFolder, faLayerGroup, faFilePdf } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="sidebar-main">
        <div className="sidebar">
          <div className="sidebar-icon-container" >
            <Link to='/' id="home-icon" className="sidebar-container-icon">
              <FontAwesomeIcon className="faIcons" id="home-icon" icon={faHome} />
              <p>Home</p>
            </Link>

            <div className="sidebar-container-icon">
              <a href='https://www.linkedin.com/in/briancho91' target="_blank" className="sidebar-container-icon">
                <FontAwesomeIcon className="faIcons" icon={faLinkedin} />
                <p>LinkedIn</p>
              </a>
            </div>

            <div className="sidebar-container-icon">
              <a href='https://github.com/BrianCho91' target="_blank" className="sidebar-container-icon">
                <FontAwesomeIcon className="faIcons" icon={faGithubSquare} />
                <p>GitHub</p>
              </a>
            </div>

            <div className="sidebar-container-icon">
              <a href='http://www.briancho.me/assets/documents/Resume.pdf' target="_blank" className="sidebar-container-icon">
                <FontAwesomeIcon className="faIcons" icon={faFilePdf} />
                <p>Resume</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Sidebar;