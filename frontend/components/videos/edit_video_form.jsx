import { connect } from 'react-redux';
import VideoForm from './video_form';
import { fetchVideo, updateVideo } from '../../actions/video_actions';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt, faSpinner } from '@fortawesome/free-solid-svg-icons'

class EditVideoForm extends React.Component {
    constructor(props) {
      super(props);
      // debugger
      this.state = {
        title: "",
        description: "",
        videoFile: null,
        videoUrl: null,
        thumbnail: null,
        photoUrl: null,
        loading: false,
      }
      this.update = this.update.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handlePictureFile = this.handlePictureFile.bind(this)
      this.handleVideoFile = this.handleVideoFile.bind(this)
  }


  componentDidMount() {
    // let video = ownProps.match.params.videoId;
    let that = this;
    let videoId = this.props.match.params.videoId;;
    this.props.fetchVideo(videoId)
      .then(() => that.setState({ title: this.props.video.title }))
      ;
  }

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
    // debugger
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
    this.props.action(formData, this.props.video.id).then(() => {
      that.setState({ loading: false })
      that.props.location.replace('/') 
    })
  }
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
    
    

  render() {
    // debugger
    if (!this.props.video) return null
    const { action, formType, video } = this.props;
    return (
      // <VideoForm
      //   action={action}
      //   formType={formType}
      //   video={video} />

      <div className="video-form-main">
      <div className="video-form-container">

        <form onSubmit={this.handleSubmit}>

          <div className={!this.props.video.videoUrl ? "nonexist" : "new-form-container"} >
            <div className="new-form-thumb-video-containers">
              <div className={this.props.video.photoUrl ? "new-form-thumbnail-container-preview" : "new-form-thumbnail-container-input"}>

                <div className="new-form-thumb-text-container">
                  <img className={this.props.video.photoUrl ? "thumbnail-preview-item" : " nonexist "} src={this.props.video.photoUrl}/>


                  {/* <FontAwesomeIcon className={!this.props.video.thumbnail ? "new-form-thumb-icon" : " hide-in-corner "} icon={faCloudUploadAlt} />
                  <p className={!this.props.video.thumbnail ? "new-form-thumb-text1" : " nonexist "}>Select thumbnail to upload</p>
                  <p className={!this.props.video.thumbnail ? "new-form-thumb-text2" : " nonexist "}>or drag and drop picture</p> */}
                </div>
                {/* <input className={!this.props.video.thumbnail ? "thumbnail-input" : " thumbnail-input "} type="file" onChange={this.handlePictureFile} />  */}
             
             
              </div>
              <input className={!this.props.video.thumbnail ? "thumbnail-input" : " thumbnail-input "} type="file" onChange={this.handlePictureFile} accept="image/*" /> 
              <div className="new-form-video-container">

                <video className="video-preview" width="100%" controls>
                  <source
                    src={this.props.video.videoUrl}
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
                  placeholder={this.props.video.title}
                  value={this.state.title}
                  // {this.props.video.title}
                  onChange={this.update('title')}/>
              </label>
              <label className="new-form-description">
                {/* <p className="new-form-description-text"></p> */}
                <textarea cols="60" rows="40" 
                  className="new-form-description-textarea"
                  placeholder="Description"
                  onChange={this.update('description')} >{this.props.video.description}
                </textarea>
              </label>
              <div className="new-form-submit-container">
                {/* <input type="button" className="new-form-submit" value="Submit"/> */}
                <button className={this.state.loading === false ? "new-form-submit" : "hide"}>Submit</button>
                <button className={this.state.loading === true ? "new-form-submit disabled" : "hide"}>
                  {/* Uploading */}
                  <FontAwesomeIcon icon={faSpinner} className="fa-spin" />
                </button>
              </div>
            </div>
          
          </div>
          {/* <div className={!this.props.video.videoFile ? "video-submit-button-container" : "hide-in-corner"} >
            <FontAwesomeIcon className={!this.props.video.videoFile ? "faIcons-upload" : "hide-in-corner"} id="" icon={faCloudUploadAlt}/>
            <p className={!this.props.video.videoFile ? "video-form-header1" : "hide-in-corner"}>Select video to upload</p>
            <p className={!this.props.video.videoFile ? "video-form-header2" : "hide-in-corner"}>or drag and drop video file</p>
          </div>
          <input className={!this.props.video.videoFile ? "video-submit-input" : "hide-in-corner"} type="file" onChange={this.handleVideoFile} accept="video/*" />  */}
        </form>
      </div>
      <div className="video-form-help-container">
        <p className="help-header">HELP AND SUGGESTIONS</p>
        <p id="important-text" className="help-subtext">Please do not post videos that are longer in length, for my wallet's sake.</p>
        <p className="help-subtext">By submitting your videos to uTube, you acknowledge that you agree to uTube's Terms of Services and Guidelines.</p>
        <p className="help-subtext">Please be sure not to violate others' copyright or privacy rights.</p>
      </div>
    </div>


    );
  }
}

export default EditVideoForm;