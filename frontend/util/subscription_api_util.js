export const createSub = sub => {
  return(
    $.ajax({
      method: 'POST',
      url: `api/subscriptions`,
      data: { sub }
    })
  );
};

export const deleteSub = id => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/subscriptions/${id}`
    })
  );
}