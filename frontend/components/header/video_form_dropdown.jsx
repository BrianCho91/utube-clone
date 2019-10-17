import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhotoVideo } from '@fortawesome/free-solid-svg-icons'

class VideoFormDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {

  }

  render() {
    return (
      <div id="dropdownMenu" className="video-form-dropdown-container">

        <div className="video-form-dropdown-item-containers">
          <div className="video-form-dropdown-buttons">
            <Link to='/upload'>
              <div className="video-form-dropdown-button">
                <FontAwesomeIcon className="faPhotoVideoIcon" icon={faPhotoVideo} />
                <span id="video-form-dropdown-text">
                  Upload video
              </span>
              </div>
            </Link>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(VideoFormDropdown);