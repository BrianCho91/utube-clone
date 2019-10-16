class Like < ApplicationRecord
  # validates :likeable_id, uniqueness: true

  belongs_to :likeable, polymorphic: true
  belongs_to :user

end
