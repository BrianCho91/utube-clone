class Video < ApplicationRecord

  validates :title, :description, :views, presence: true

  belongs_to :user
  has_many :comments

  has_one_attached :video

end
