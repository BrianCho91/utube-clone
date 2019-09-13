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
    this.props.fetchVideos()
  }

  menuClickHandler() {
    const menu = document.getElementById('faBars')
    menu.addEventListener('click', () => {
      console.log('clicked')
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
    // debugger;
    const homeButtons = document.getElementById('home-buttons');
    homeButtons.addEventListener('click', () => {
      return true
    });
  }

  renderVideos() {
    if (this.props.videos.length > 0) {
      let videos = this.props.videos.slice(0,10);
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


  render() {

      let videos = this.props.videos;
      // let shuffledVideos = this.shuffleVideos(videos).slice(0,10)
      // shuffledVideos = shuffledVideos.map(video => {
      let shuffledVideos = this.shuffleVideos(videos.slice(0,10)).map(video => {
        return (
          <VideoIndexItem video={video} key={video.id} indexPage={true} />
        )
      })

    return(
      <div className="index-main-page">
        <div className="video-index-page">
          <div className="recommended-videos">
            <div className="recommended-bar">
              <p>Recommended</p>
              {/* <VideoFormContainer /> */}
            </div>
            {/* {this.renderVideos()} */}
            {shuffledVideos}

          </div>
        </div>
      </div>
    )
  }
}

export default VideoIndex;

            /* <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/qnfEBjnX8GM/maxresdefault.jpg"/>
              <p className="index-video-title">
                How to make a thumbnail!
              </p>
              <p className="index-video-author">
                Some Guy
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  100K views
                </p> <span className="index-video-upload-date">2 weeks ago</span>
              </div>
            </div>  
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/KQ6-suVy9B0/maxresdefault.jpg"/>
              <p className="index-video-title">
                Football!
              </p>
              <p className="index-video-author">
                ESPN
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  141K views
                </p> <span className="index-video-upload-date">3 weeks ago</span>
              </div>
            </div>
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/vy2JfDmspII/maxresdefault.jpg"/>
              <p className="index-video-title">
                Warriooooooors
              </p>
              <p className="index-video-author">
                Jim
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  1,992 views
                </p> <span className="index-video-upload-date">2 months ago</span>
              </div>
            </div>
            <div className="video-item-container">
              <img className="thumbnails" src="https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2017/07/Cooking_Ribeye_Steaks_Example.jpg"/>
              <p className="index-video-title">
                Yum steak
              </p>
              <p className="index-video-author">
                Sous Vide All
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  941 views
                </p> <span className="index-video-upload-date">1 day ago</span>
              </div>
            </div>     
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/eWExOPF0bp4/maxresdefault.jpg"/>
              <p className="index-video-title">
                tenderize the steak!
              </p>
              <p className="index-video-author">
                Guga
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  8 views
                </p> <span className="index-video-upload-date">12 days ago</span>
              </div>
            </div>
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/3n9rDwpa6QA/maxresdefault.jpg"/>
              <p className="index-video-title">
                twice~
              </p>
              <p className="index-video-author">
                Tzuyu
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  100M views
                </p> <span className="index-video-upload-date">8 months ago</span>
              </div>
            </div>  
            <div className="video-item-container"> 
              <img className="thumbnails" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/1602A/production/_106345109_5f83eed6-6c2b-495d-ade4-d102ef78803b.jpg"/>
              <p className="index-video-title">
                blackpink in your area
              </p>
              <p className="index-video-author">
                Jennie
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  4,231 views
                </p> <span className="index-video-upload-date">14 days ago</span>
              </div>
            </div>
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/K6VUTSjBe6s/maxresdefault.jpg"/>
              <p className="index-video-title">
                totalled. goodbye.
              </p>
              <p className="index-video-author">
                bcho
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  32K views
                </p> <span className="index-video-upload-date">9 months ago</span>
              </div>
            </div>  
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/-bXCv-BF9I4/maxresdefault.jpg"/>
              <p className="index-video-title">
                boba is life.
              </p>
              <p className="index-video-author">
                bobabae
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  100 views
                </p> <span className="index-video-upload-date">2 weeks ago</span>
              </div>
            </div>  
            <div className="video-item-container">
              <img className="thumbnails" src="https://i.ytimg.com/vi/HE4F7Pt3j1A/maxresdefault.jpg"/>
              <p className="index-video-title">
                make me milk tea.
              </p>
              <p className="index-video-author">
                milktealover123
              </p>
              <div className="index-view-container">
                <p className="index-video-views">
                  10K views
                </p> <span className="index-video-upload-date">1 week ago</span>
              </div> */
            /* </div> */