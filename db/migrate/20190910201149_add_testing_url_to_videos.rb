class AddTestingUrlToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :test_url, :string
  end
end
