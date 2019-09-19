import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'
import VideoFormDetails from './video_form_details';


class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      videoFile: null,
      videoUrl: null,
      thumbnail: null,
      thumbUrl: null,
      loading: false
    }
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handlePictureFile = this.handlePictureFile.bind(this)
    this.handleVideoFile = this.handleVideoFile.bind(this)
    // debugger;
  };

  // handleInput(e) {
  //   this.setState({ title: e.currentTarget.value });
  // }

  componentDidMount() {
    
    let dropdown = document.getElementById('dropdownMenu')
    // debugger
    if (dropdown) {
      // dropdown.classList.toggle('video-form-dropdown-container')
      // dropdown.classList.remove("video-form-dropdown-container")
    dropdown.classList.add("hide")
    }
  }

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

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value,
    });
  };

  handleVideoFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    // debugger;
    fileReader.onloadend = () => {
      this.setState({ 
        videoFile: file, 
        videoUrl: fileReader.result, 
        title: file.name });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handlePictureFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      // debugger
      this.setState({ 
        thumbnail: file, 
        thumbUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    let that = this;
    this.setState({ loading: true })
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    if (this.state.videoFile) {
      formData.append('video[attached_video]', this.state.videoFile);
      formData.append('video[thumbnail]', this.state.thumbnail);
      // formData.append('video[videoUrl]', this.state.videoFile);
      // formData.append('video[photoUrl]', this.state.thumbnail);
    }
    this.props.createVideo(formData).then(() => {
      that.setState({ loading: false })
      that.props.location.replace('/') 
    })
    // $.ajax({
    //     url: '/api/videos',
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
    }
    
    
    // .then( () => {


    //   this.props.history.push('/')
    // $.ajax({
    //   url: '/api/videos',
    //   method: 'POST',
    //   data: formData,
    //   contentType: false,
    //   processData: false
    // }).then(
    //   (response) => console.log(response.message),
    //   (response) => {
    //     console.log(response.responseJSON)
    //   }
    // );

  render() {
    
    return (
      <div className="video-form-main">
        <div className="video-form-container">

          <form onSubmit={this.handleSubmit}>

            <div className={!this.state.videoFile ? "nonexist" : "new-form-container"} >
              <div className="new-form-thumb-video-containers">
                <div className={this.state.thumbnail ? "new-form-thumbnail-container-preview" : "new-form-thumbnail-container-input"}>

                  <div className="new-form-thumb-text-container">
                    <img className={this.state.thumbnail ? "thumbnail-preview-item" : " nonexist "} src={this.state.thumbUrl}/>


                    <FontAwesomeIcon className={!this.state.thumbnail ? "new-form-thumb-icon" : " hide-in-corner "} icon={faCloudUploadAlt} />
                    <p className={!this.state.thumbnail ? "new-form-thumb-text1" : " nonexist "}>Select thumbnail to upload</p>
                    <p className={!this.state.thumbnail ? "new-form-thumb-text2" : " nonexist "}>or drag and drop picture</p>
                  </div>
                  {/* <input className={!this.state.thumbnail ? "thumbnail-input" : " thumbnail-input "} type="file" onChange={this.handlePictureFile} />  */}
               
               
                </div>
                <input className={!this.state.thumbnail ? "thumbnail-input" : " thumbnail-input "} type="file" onChange={this.handlePictureFile} accept="image/*" /> 
                <div className="new-form-video-container">

                  <video className="video-preview" width="100%" controls>
                    <source
                      src={this.state.videoUrl}
                      type="video/mp4" />
                  </video>
                </div>
              </div>
              
              <div className="new-form-inputs-containers">
                <p className="new-form-header">Enter video information:</p>
                <label className="new-form-title">
                  {/* <p className="new-form-title-text">Title:</p> */}
                  <input type="text" 
                    className="new-form-title-input"
                    // placeholder={this.state.title}
                    value={this.state.title}
                    onChange={this.update('title')}/>
                </label>
                <label className="new-form-description">
                  {/* <p className="new-form-description-text"></p> */}
                  <textarea cols="60" rows="40" 
                    className="new-form-description-textarea"
                    placeholder="Description"
                    onChange={this.update('description')} >
                  </textarea>
                </label>
                <div className="new-form-submit-container">
                  {/* <input type="button" className="new-form-submit" value="Submit"/> */}
                  <button className={this.state.loading === false ? "new-form-submit uploading" : "hide"}>Submit</button>
                  <button className={this.state.loading === true ? "new-form-submit uploading" : "hide"}>
                    {/* Uploading */}
                    <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                  </button>
                </div>
              </div>
            
            </div>
            <div className={!this.state.videoFile ? "video-submit-button-container" : "hide-in-corner"} >
              <FontAwesomeIcon className={!this.state.videoFile ? "faIcons-upload" : "hide-in-corner"} id="" icon={faCloudUploadAlt}/>
              <p className={!this.state.videoFile ? "video-form-header1" : "hide-in-corner"}>Select video to upload</p>
              <p className={!this.state.videoFile ? "video-form-header2" : "hide-in-corner"}>or drag and drop video file</p>
            </div>
            <input className={!this.state.videoFile ? "video-submit-input" : "hide-in-corner"} type="file" onChange={this.handleVideoFile} accept="video/*" /> 
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
