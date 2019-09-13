import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'


class VideoForm extends React.Component {
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

  // handleInput(e) {
  //   this.setState({ title: e.currentTarget.value });
  // }

  // handleFile(e) {
  //   debugger;
  //   const reader = new FileReader();
  //   const file = e.currentTarget.files[0];
  //   reader.onloadend = () =>
  //     this.setState({ videoFile: file });

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   } else {
  //     this.setState({ videoFile: ""});
  //   }
  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('video[attached_video]', this.state.videoFile)
  // }

  handleFile(e) {
  // debugger;
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ videoFile: file });
// debugger;
    if (file) {
      reader.readAsDataURL(file);
      <Redirect to={{
        pathname: '/upload/details',
        state: {videoFile: this.state.videoFile}
      }} push/>
    } else {
      <Link to="/upload/errors" ></Link>
    }
  }



    // handleSubmit(e) {
    //   e.preventDefault();
    //   const formData = new FormData();
    //   if (this.state.photoFile) {
  
    //     formData.append('post[photo]', this.state.photoFile);
    //   }
    //   $.ajax({
    //     url: '/api/posts',
    //     method: 'POST',
    //     data: formData,
    //     contentType: false,
    //     processData: false
    //   }).then(
    //     (response) => console.log(response.message),
    //     (response) => {
    //       console.log(response.responseJSON)
    //     }
    //   );



  // }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    console.log(this.state.video)
    return (
      <div className="video-form-main">
        <div className="video-form-container">

          {/* <form onSubmit={this.handleSubmit.bind(this)}> */}
          <form>

            <div className="video-submit-button-container">
              <FontAwesomeIcon className="faIcons-upload" id="" icon={faCloudUploadAlt}/>
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

export default VideoForm;



            {/* <label className="video-form-body-label" >Video body</label>
                  <input type="text"
                    className="video-form-title-label"
                    value={this.state.title}
                    onChange={this.handleInput.bind(this)} />
                  <input className="video-submit-input" type="file" onChange={this.handleFile.bind(this)} />
                  <h3>Image preview </h3>
                  {preview} */}
                  {/* <button className="video-submit-button">
                    <FontAwesomeIcon className="faIcons-upload" id="" icon={faCloudUploadAlt}/>
                  
              Upload a video(picture)
              </button> */}