class Subscription < ApplicationRecord

  belongs_to :channel
  belongs_to :subscriber, foreign_key: :subscriber_id, class_name: :User

end
