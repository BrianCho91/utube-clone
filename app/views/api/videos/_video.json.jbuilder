json.extract! video, :id, :title, :description, :views, :test_url, :created_at
json.photoUrl url_for(video.attached_video) if video.attached_video.attached?
json.author video.user