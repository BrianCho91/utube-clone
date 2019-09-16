json.partial! 'api/comments/comment', comment: @comment

json.parent_comment @comment.parent_comment if @comment.parent_comment