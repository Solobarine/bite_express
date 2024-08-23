class CreateReviews < ActiveRecord::Migration[7.1]
  def change
    create_table :reviews do |t|
      t.references :user
      t.references :restaurant
      t.string :title, null: false
      t.text :content, null: false
      t.integer :ratings, null: false
      t.timestamps
    end
  end
end
