json.extract! @subscription, :id, :subscriber_id, :channel_id
# json.extract! comment, :parent_comment if parent_comment


json.channel subscription.channel
json.subscriber subscription.subscriber
