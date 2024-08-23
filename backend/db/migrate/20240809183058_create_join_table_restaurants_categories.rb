class CreateJoinTableRestaurantsCategories < ActiveRecord::Migration[7.1]
  def change
    create_join_table :restaurants, :categories do |t|
      t.index %i[restaurant_id category_id]
      t.index %i[category_id restaurant_id]
    end
  end
end
