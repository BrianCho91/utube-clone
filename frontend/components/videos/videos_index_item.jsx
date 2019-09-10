import React from 'react';
import { Link } from 'react-router-dom';

const VideoIndexItem = props => (
  // <div>

  //   {props.video.title}
  // </div>
    <div className="video-item-container">
      <Link to={`/watch/${props.video.id}`} >
        <img className="thumbnails" src={props.video.test_url}/>
      </Link>
      {console.log(props.video.test_url)}
      <p className="index-video-title">
        <Link to={`/watch/${props.video.id}`}>{props.video.title}</Link>
      </p>
      <p className="index-video-author">
        <Link to={`/channel/${props.video.id}`}>{props.video.author.username}</Link>
      </p>
      <div className="index-view-container">
        <p className="index-video-views">
          {props.video.views}
        </p> <span className="index-video-upload-date">{props.video.created_at}</span>
      </div>
    </div>
)

export default VideoIndexItem;
