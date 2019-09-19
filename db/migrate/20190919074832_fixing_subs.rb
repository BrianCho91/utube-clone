class FixingSubs < ActiveRecord::Migration[5.2]
  def change
    remove_column :subscriptions, :channel_id, :integer
    add_column :subscriptions, :subscribee_id, :integer
    add_index :subscriptions, :subscribee_id
  end
end
