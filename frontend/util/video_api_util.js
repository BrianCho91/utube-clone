export const fetchVideos = () => {
  return(
    $.ajax({
      method: 'GET',
      url: 'api/videos'
    })
  );
};

export const fetchVideo = id => {
  return(
    $.ajax({
      method: 'GET',
      url: `api/videos/${id}`
    })
  );
};

export const deleteVideo = id => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/videos/${id}`
    })
  );
};