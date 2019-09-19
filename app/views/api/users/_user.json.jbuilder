json.extract! user, :id, :username, :email

json.likedVideos user.likes.select { |like| like.likeable_type == 'Video' }
json.likedComments user.likes.select { |like| like.likeable_type == 'Comment' }

json.subscriptions user.subscriptions
json.photo url_for(user.photo) if user.photo.attached?
json.banner url_for(user.banner) if user.banner.attached?
