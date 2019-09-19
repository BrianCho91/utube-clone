class Channel < ApplicationRecord

  has_many: :subscriptions
  has_many: :subscribers, through: :subscriptions, source: :subscribers

end
