class CreateRestaurants < ActiveRecord::Migration[7.1]
  def change
    create_table :restaurants do |t|
      t.string :name
      t.string :email
      t.string :password_digest
      t.text :description
      t.string :phone_no
      t.string :location
      t.string :address
      t.string :state
      t.string :country
      t.text :opening_hours
      t.timestamps
    end
  end
end
