class Comment < ApplicationRecord
  validates :body, :user_id, :video_id, presence: true

  belongs_to :user
  belongs_to :video

  has_many :child_comments,
    foreign_key: :parent_comment_id,
    class_name: :Comment

  belongs_to :parent_comment, 
    class_name: :Comment, 
    foreign_key: :parent_comment_id, 
    optional: true

end
