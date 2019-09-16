json.extract! comment, :id, :body, :user_id, :video_id
# json.extract! comment, :parent_comment if parent_comment


json.author comment.user
json.video comment.video
json.parent_comment comment.parent_comment
json.child_comments comment.child_comments
json.likes comment.likes
