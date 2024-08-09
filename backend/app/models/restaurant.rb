class Restaurant < ApplicationRecord
  # Serialization
  serialize :location, coder: JSON
  serialize :opening_times, coder: JSON

  # Validations
  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  validates :email, presence: true, uniqueness: true
  validates :address, presence: true, length: { minimum: 2, maximum: 100 }
  validates :state, presence: true, length: { minimum: 3, maximum: 100 }
  validates :country, presence: true, length: { minimum: 3, maximum: 100 }
  validates :phone_no, presence: true, on: :update
  validates :description, presence: true, length: { minimum: 10, maximum: 500 }, on: :update
  validates :location, presence: true, on: :update
  validates :opening_times, presence: true, on: :update

  has_secure_password

  # Associations
  has_many :meals
  has_many :reviews
  has_many :likes as: :likeable, dependent: :destroy
  has_and_belongs_to_many :categories
end
