json.extract! comment, :id, :body, :user_id, :video_id

json.author comment.user
json.video comment.video
