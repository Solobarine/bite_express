class CreateOrders < ActiveRecord::Migration[7.1]
  def change
    create_table :orders do |t|
      t.references :meal, null: false, foreign_key: true
      t.references :user, null: false, foreign_key: true
      t.integer :quantity
      t.references :address, null: false, foreign_key: true
      t.string :status

      t.timestamps
    end
  end
end
