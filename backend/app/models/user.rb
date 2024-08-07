class User < ApplicationRecord
  # Validations
  validates :first_name, presence: true, length: { minimum: 2, maximum: 20 }
  validates :last_name, presence: true, length: { minimum: 2, maximum: 20 }
  validates :email, presence: true, length: { minimum: 2, maximum: 100 }
  validates :password, presence: true, length: { minimum: 8, maximum: 20 }
  validates :password_confirmation, presence: true

  has_secure_password

  # Associations
  has_many :reviews
  has_many :likes
end
