import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import VideoIndexItem from './videos_index_item';
import VideoFormContainer from './video_form_container';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.renderShuffledOnClick = this.renderShuffledOnClick.bind(this);
    this.shuffleVideos = this.shuffleVideos.bind(this);
  }

  componentDidMount() {
    this.menuClickHandler()
    this.props.fetchVideos('')
  }

  menuClickHandler() {
    const menu = document.getElementById('faBars')
    menu.addEventListener('click', () => {
    })
  }

  shuffleVideos(videos) {
    // debugger;
    for (let i = videos.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]]
    }
    return videos
  }

  renderShuffledOnClick() {
    debugger;
    const homeButtons = document.getElementById('home-buttons');

    if (homeButtons) {
      homeButtons.addEventListener('click', () => {
      });
    }
  }

  renderVideos() {
    if (this.props.videos.length > 0) {
      let videos = this.props.videos.slice(0, 10);
      if (this.renderShuffledOnClick) {
        this.shuffleVideos(videos).map(video => {
          return <VideoIndexItem video={video} key={video.id} indexPage={true} />
        })
      } else {
        videos.map(video => {
          return <VideoIndexItem video={video} key={video.id} indexPage={true} />
        })
      }
    }
  }

  homeButtonHandler() {
    let shuffledVideos = this.props.dupeVids.slice(0, 10)

    const homeButtons = document.getElementById('home-buttons');
    if (homeButtons) {
      homeButtons.addEventListener('click', () => {
        shuffledVideos = this.shuffleVideos(this.props.dupeVids).slice(0, 10)
        shuffledVideos = shuffledVideos.map(video => {
          return (
            <VideoIndexItem video={video} key={video.id} indexPage={true} />
          )
        })
      });
    }

    const homeDrawer = document.getElementById('home-drawer');
    if (homeDrawer) {
      homeDrawer.addEventListener('click', () => {
        shuffledVideos = this.shuffleVideos(this.props.dupeVids).slice(0, 10)
        shuffledVideos = shuffledVideos.map(video => {
          return (
            <VideoIndexItem video={video} key={video.id} indexPage={true} />
          )
        })
      });
    }

    const homeIcon = document.getElementById('home-icon');
    if (homeIcon) {
      homeIcon.addEventListener('click', () => {
        shuffledVideos = this.shuffleVideos(this.props.dupeVids).slice(0, 10)
        shuffledVideos = shuffledVideos.map(video => {
          return (
            <VideoIndexItem video={video} key={video.id} indexPage={true} />
          )
        })
      });
    }
  }


  render() {
    let videos = this.props.videos;

    let shuffledVideos = this.props.dupeVids.slice(0, 10)
    shuffledVideos = shuffledVideos.map(video => {
      return (
        <VideoIndexItem video={video} key={video.id} indexPage={true} />
      )
    })

    this.homeButtonHandler();

    // let shuffledVideos = this.shuffleVideos(videos).slice(0, 10)
    // shuffledVideos = shuffledVideos.map(video => {
    //   return (
    //     <VideoIndexItem video={video} key={video.id} indexPage={true} />
    //   )
    // })


    return (
      <div className="index-main-page">
        <div className="video-index-page">
          <div className="recommended-videos">
            <div className="recommended-bar">
              <p>Recommended</p>
            </div>
            {shuffledVideos}
          </div>
        </div>
      </div>
    )
  }
}

export default VideoIndex;