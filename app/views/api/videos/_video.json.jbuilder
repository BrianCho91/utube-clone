json.extract! video, :id, :title, :description, :views, :test_url, :created_at
json.videoUrl url_for(video.attached_video) if video.attached_video.attached?
# json.videoUrl url_for(video.attached_video) 

json.photoUrl url_for(video.thumbnail) if video.thumbnail.attached?
# json.photoUrl url_for(video.thumbnail)

json.author do 
  json.extract! video.user, :id, :username
  json.photo url_for(video.user.photo) if video.user.photo.attached?
end

json.comments video.comments
json.likes video.likes
json.published video.created_at.strftime("%B %d, %Y")
json.publishedAgo time_ago_in_words(video.created_at)