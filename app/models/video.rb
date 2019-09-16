class Video < ApplicationRecord

  validates :title, :description, :views, :user_id, presence: true

  belongs_to :user
  has_many :comments
  has_many :likes, as: :likeable

  has_one_attached :attached_video
  has_one_attached :thumbnail


  has_one_attached :video

end
