class Address < ApplicationRecord
  validates :name, presence: true, length: { minimum: 2, maximum: 50 }
  validates :address, presence: true, length: { minimum: 10, maximum: 100 }
  validates :zipCode, presence: true, length: { is: 6 }
  validates :state, presence: true, length: { minimum: 2, maximum: 20 }
  validates :country, presence: true, length: { minimum: 2, maximum: 20 }

  belongs_to :user
end
