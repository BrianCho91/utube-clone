import React from 'react';
import { Link } from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      views: 0,
      user_id: this.props.currentUser.id,
      photoFile: null,
      photoUrl: null
    }

  };

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
  }

  handleFile(e) {
    const reader = new FileReader();
    const file = e.currentTarget.files[0];
    reader.onloadend = () =>
      this.setState({ imageUrl: reader.result, imageFile: file });

    if (file) {
      reader.readAsDataURL(file);
    } else {
      this.setState({ imageUrl: "", imageFile: null });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('post[title]', this.state.title);
    formData.append('post[photo]', this.state.photoFile)
    this.props.createVideo(this.state)

  }

  render() {
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;

    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label htmlFor="video-body">Video body</label>
          <input type="text"
            className="video-submit-input"
            value={this.state.title}
            onChange={this.handleInput.bind(this)} />
          <input className="video-submit-input" type="file" onChange={this.handleFile.bind(this)} />
          <h3>Image preview </h3>
          {preview}
          <button className="video-submit-button">Upload a video(picture)</button>
        </form>
      </div>
    )
  }

}

export default VideoForm;
