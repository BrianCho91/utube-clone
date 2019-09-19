import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

class VideoFormDropdown extends React.Component {
  constructor(props) {
    super(props);
    // this.videoFormDropClass = this.videoFormDropClass.bind(this);
  }

  // videoFormDropClass() {
  //   return this.props.show ? "videoFormDrop-show" : "videoFormDrop-hide"
  // }

  componentDidUpdate() {

  }

  render() {
    // {console.log("clicked")}
    return(
      <div id="dropdownMenu" className="video-form-dropdown-container">
        {/* <div className="video-form-dropdown-container">
          <div className="video-form-dropdown-user-pic">
            <FontAwesomeIcon className="faIcons" id="faUserCircle" icon={faUserCircle}/>
          </div>
        </div> */}
        <div className="video-form-dropdown-item-containers">
          <div className="video-form-dropdown-buttons">
            <Link to='/upload'>
            <div className="video-form-dropdown-button">
              <FontAwesomeIcon className="faPhotoVideoIcon" icon={faPhotoVideo}/>
              <span id="video-form-dropdown-text">
                Upload video
              </span>
            </div>
          </Link>
            
            {/* <div className="signout-button" onClick={this.props.logout}>
              <FontAwesomeIcon className="faUserdropdownIcons" icon={faSignOutAlt}/>
              <span id="video-form-dropdown-text">
                Sign out
              </span>
            </div> */}

            
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(VideoFormDropdown);