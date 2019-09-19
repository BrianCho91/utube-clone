@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.id subscription.id
    json.subscriberId subscription.subscriber_id
    json.subscribeeId subscription.subscribee_id
  end
end