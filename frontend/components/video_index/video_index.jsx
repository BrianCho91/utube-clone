import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {

    return(
      <div className="video-index-page">
        <div className="recommended-bar">
          <p>Recommended videos</p>
        </div>
        <table className="recommended-videos">
          <tr>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/qnfEBjnX8GM/maxresdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/KQ6-suVy9B0/maxresdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/vy2JfDmspII/maxresdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/irbMhzSZvxM/hqdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/eWExOPF0bp4/maxresdefault.jpg"/>
            </th>
          </tr>
          <tr>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/3n9rDwpa6QA/maxresdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://ichef.bbci.co.uk/news/660/cpsprodpb/1602A/production/_106345109_5f83eed6-6c2b-495d-ade4-d102ef78803b.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/K6VUTSjBe6s/maxresdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/-bXCv-BF9I4/maxresdefault.jpg"/>
            </th>
            <th>
              <img className="thumbnails" src="https://i.ytimg.com/vi/HE4F7Pt3j1A/maxresdefault.jpg"/>
            </th>
          </tr>
        </table>
      </div>
    )
  }
}

export default VideoIndex;