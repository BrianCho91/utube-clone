import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'


class VideoFormDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      videoFile: null,
      thumbnail: null,
      newForm: false
    }
    // debugger;
  };

  handleFile(e) {
    // debugger;
    const reader = new FileReader();
    const file = e.currentTarget.files[0];

    reader.onloadend = () =>
      this.setState({ videoFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      <Link to="/upload/errors" ></Link>
    }
  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    console.log(this.state.video)
    return (
      <div className="video-form-main">
        <div className="video-form-container">
          <form>
            <div className="video-submit-button-container">
              <FontAwesomeIcon className="faIcons-upload" id="" icon={faCloudUploadAlt} />
              <p className="video-form-header1">Select files to upload</p>
              <p className="video-form-header2">or drag and drop video files</p>
            </div>
            <input className="video-submit-input" type="file" onChange={this.handleFile.bind(this)} />
          </form>
        </div>
        <div className="video-form-help-container">
          <p className="help-header">HELP AND SUGGESTIONS</p>
          <p id="important-text" className="help-subtext">Please do not post videos that are longer in length, for my wallet's sake.</p>
          <p className="help-subtext">By submitting your videos to uTube, you acknowledge that you agree to uTube's Terms of Services and Guidelines.</p>
          <p className="help-subtext">Please be sure not to violate others' copyright or privacy rights.</p>
        </div>
      </div>
    )
  }
}

export default VideoFormDetails;
