json.extract! video, :id, :title, :description, :views, :test_url, :created_at
json.videoUrl url_for(video.attached_video) if video.attached_video.attached?
json.photoUrl url_for(video.thumbnail) if video.thumbnail.attached?
json.author video.user
json.comments video.comments
json.likes video.likes
json.published video.created_at.strftime("%B %d, %Y")
json.publishedAgo time_ago_in_words(video.created_at)