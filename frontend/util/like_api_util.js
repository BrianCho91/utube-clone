export const createLike = like => {
  return (
    $.ajax({
      method: 'POST',
      url: `api/like`,
      data: { like }
    })
  );
};

export const updateLike = like => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/like/${like.id}`,
      data: { like }
    })
  );
};

export const deleteLike = likeId => {
  return (
    $.ajax({
      method: 'DELETE',
      url: `api/like/${likeId}`
    })
  );
};