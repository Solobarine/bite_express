class Restaurant < ApplicationRecord
  # Serialization
  serialize :location, coder: JSON
  serialize :opening_times, coder: JSON

  # Validations
  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  # validates :description, presence: true, length: { minimum: 10, maximum: 500 }
  validates :email, presence: true
  # validates :phone_no, presence: true
  validates :address, presence: true, length: { minimum: 2, maximum: 100 }
  validates :state, presence: true, length: { minimum: 3, maximum: 100 }
  validates :country, presence: true, length: { minimum: 3, maximum: 100 }

  has_secure_password

  # Associations
  has_many :meals
end
