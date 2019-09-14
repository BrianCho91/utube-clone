json.extract! video, :id, :title, :description, :views, :test_url, :created_at
json.videoUrl url_for(video.attached_video) if video.attached_video.attached?
json.photoUrl url_for(video.thumbnail) if video.thumbnail.attached?
json.author video.user
json.comments video.comments