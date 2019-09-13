import * as VideoAPIUtil from '../util/video_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';

const receiveAllVideos = videos => ({
  type: RECEIVE_ALL_VIDEOS,
  videos
});

const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

const removeVideo = videoId => ({
  type: REMOVE_VIDEO,
  videoId
});

export const fetchVideos = () => dispatch => (
  VideoAPIUtil.fetchVideos()
    .then(videos => dispatch(receiveAllVideos(videos)))
);

export const fetchVideo = video => dispatch => (
  VideoAPIUtil.fetchVideo(video)
    .then(video => dispatch(receiveVideo(video)))
);

export const createVideo = formData => dispatch => (
  VideoAPIUtil.createVideo(formData)
    .then( video => dispatch(receiveVideo(video)))
)

export const deleteVideo = videoId => dispatch => (
  VideoAPIUtil.deleteVideo(videoId)
    .then(video => dispatch(removeVideo(videoId)))
);