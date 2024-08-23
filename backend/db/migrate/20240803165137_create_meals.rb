class CreateMeals < ActiveRecord::Migration[7.1]
  def change
    create_table :meals do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.text :ingredients, null: false
      t.text :nutrition, null: false
      t.decimal :price, null: false, default: 0.00
      t.boolean :avaliability, null: false, default: false
      t.references :restaurant, null: false
      t.timestamps
    end
  end
end
