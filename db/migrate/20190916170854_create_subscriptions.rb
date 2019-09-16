class CreateSubscriptions < ActiveRecord::Migration[5.2]
  def change
    create_table :subscriptions do |t|
      t.integer :subscriber_id, null: false
      t.integer :channel_id, null: false

      t.timestamps
    end
    add_index :subscriptions, :subscriber_id
    add_index :subscriptions, :channel_id
  end
end
