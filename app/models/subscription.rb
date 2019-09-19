class Subscription < ApplicationRecord
  validates_uniqueness_of :subscriber_id, :scope => [:subscribee_id]

  # belongs_to :channel
  # belongs_to :subscriber, foreign_key: :subscriber_id, class_name: :User

  belongs_to :subscription, foreign_key: :subscriber_id, class_name: :User

  belongs_to :subscriber, foreign_key: :subscribee_id, class_name: :User

end
