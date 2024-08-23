class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :email, null: false
      t.string :password_digest
      t.string :date_of_birth
      t.string :gender
      t.string :phone_no
      t.string :nationality
      t.timestamps
    end
  end
end
