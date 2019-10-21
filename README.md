# uTube

## Description

- Youtube inspired, video sharing web application

## Link

* [uTube](http://utube-fsp.herokuapp.com)

## User Authentication

* Utilizes Ruby on Rails backend with BCrypt for secure user authentication 

![gif](https://media.giphy.com/media/SXZcPE6DtUoVUk2nSW/giphy.gif)

* Recursively calls a demo user for quick website preview

    <details>
    <summary>Code Snippet</summary>
    <p>

    ```JavaScript
    demoClickHandler(e) {
        e.preventDefault()
        this.setState({
          username: '',
          email: '',
          password: ''
        })
        this.setUsername();
      }

      setUsername(demoUsername) {
        demoUsername = demoUsername || "Brian Cho".split('');

        setTimeout(() => {
          this.setState({
            username: this.state.username + demoUsername.shift()
          });
          demoUsername.length > 0 ? this.setUsername(demoUsername) : this.setPassword()
        }, 100)

      }

      setPassword(demoPassword) {
        demoPassword = demoPassword || "123123".split('');

        setTimeout(() => {
          this.setState({
            password: this.state.password + demoPassword.shift()
          });
          demoPassword.length > 0 ? this.setPassword(demoPassword) : this.props.processForm(this.state)
        }, 100)

      }
    ```

    </p>
    </details>  

## Video Uploading and Editing with Thumbnail Previews

* Users can upload, edit, and delete their videos through AJAX calls that connect to Ruby on Rails backend CRUD system

![gif2](https://media.giphy.com/media/ckNvLtPycgwblzZOTD/giphy.gif)

* Uses FileReader to handle video and picture files that eventually get sent to AWS

    <details>
    <summary>Code Snippet</summary>
    <p>

    ```JavaScript
    handleVideoFile(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({
          videoFile: file,
          videoUrl: fileReader.result,
          title: file.name
        });
      };
      if (file) {
        fileReader.readAsDataURL(file);
      }
    }

    handlePictureFile(e) {
      const file = e.currentTarget.files[0];
      const fileReader = new FileReader();
      fileReader.onloadend = () => {
        this.setState({
          thumbnail: file,
          thumbUrl: fileReader.result
        });
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
      }
      this.props.createVideo(formData).then(() => {
        that.setState({ loading: false })
        that.props.location.replace('/')
      })
    }
    ```

    </p>
    </details>  

## Custom built commenting system with nested comments and likes

* By fetching videos and the comments related through those comments through React state, we recursively fetch comments with parent IDs.

![gif2](https://media.giphy.com/media/J4TrRMrUKB4A5PDsH7/giphy.gif)
