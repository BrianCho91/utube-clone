import { connect } from 'react-redux';
import VideoIndex from './videos_index';
import React from "react";
import { Link } from 'react-router-dom';
import { fetchVideos } from '../../actions/video_actions'


const mapStateToProps = (state) => {
  let videos = Object.values(state.entities.videos);

  let dupeVids = videos.slice()
  for (let i = dupeVids.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [dupeVids[i], dupeVids[j]] = [dupeVids[j], dupeVids[i]]
  }
  
  return ({
    videos,
    dupeVids
  })
}

const mapDispatchToProps = dispatch => {
  return ({
    fetchVideos: (query) => dispatch(fetchVideos(query))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex)