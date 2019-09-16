json.extract! user, :id, :username, :email

json.likedVideos user.likes.select { |like| like.likeable_type == 'Video' }
json.likedComments user.likes.select { |like| like.likeable_type == 'Comment' }