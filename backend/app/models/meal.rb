class Meal < ApplicationRecord
  has_one_attached :image

  # Serializations
  serialize :ingredients, coder: JSON
  serialize :nutrition, coder: JSON

  # Validations
  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  validates :price, presence: true
  validates :ingredients, presence: true
  validates :nutrition, presence: true
  validates :description, presence: true, length: { minimum: 2, maximum: 500 }

  # Associations
  has_many :likes, as: :likeable, dependent: :destroy
  belongs_to :restaurant

   def imageUrl
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
