class CreateMealCategory < ActiveRecord::Migration[7.1]
  def change
    create_table :meal_categories do |t|
      t.string :name, null: false
      t.timestamps
    end
  end
end
