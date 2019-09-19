// export const fetchVideos = () => {
//   return(
//     $.ajax({
//       method: 'GET',
//       url: 'api/videos'
//     })
//   );
// };

export const fetchVideos = query => {
  return(
    $.ajax({
      method: 'GET',
      url: 'api/videos',
      data: { query }
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

export const createVideo = formData => {
  return(
    $.ajax({
      method: 'POST',
      url: `api/videos/`,
      data: formData,
      contentType: false,
      processData: false
    })
  );
};

export const updateVideo = (formData, videoId) => {
  // debugger
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/videos/${videoId}`,
      data: formData,
      contentType: false,
      processData: false
    })
  )
}

export const updateViews = (video) => {
  // debugger
  return(
    $.ajax({
      method: 'PATCH',
      url: `api/videos/${video.id}`,
      data: video
    })
  )
}

export const deleteVideo = id => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/videos/${id}`
    })
  );
};