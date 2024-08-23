class CreateAddresses < ActiveRecord::Migration[7.1]
  def change
    create_table :addresses do |t|
      t.string :name, null: false
      t.text :address, null: false
      t.string :zipCode, null: false
      t.string :state, null: false
      t.string :country, null: false
      t.references :user
      t.timestamps
    end
  end
end
