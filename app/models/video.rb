class Video < ApplicationRecord

  validates :title, :description, :views, presence: true

  belongs_to :user
  has_many :comments

end
