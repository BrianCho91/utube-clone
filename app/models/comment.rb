class Comment < ApplicationRecord
  validates :body, :user_id, :video_id, presence: true

  belongs_to :user
  belongs_to :video
  # has_many :child, class_name: 'Comment'
  # belongs_to :parent, class_name: 'Comment'

end
