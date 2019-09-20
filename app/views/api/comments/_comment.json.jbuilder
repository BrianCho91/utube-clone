json.extract! comment, :id, :body, :user_id, :video_id
# json.extract! comment, :parent_comment if parent_comment


json.author do 
  json.extract! comment.user, :id, :username
  json.photo url_for(comment.user.photo) if comment.user.photo.attached?
end

json.video comment.video
json.parent_comment_id comment.parent_comment_id
json.child_comments comment.child_comments
json.likes comment.likes
json.publishedAgo time_ago_in_words(comment.created_at)