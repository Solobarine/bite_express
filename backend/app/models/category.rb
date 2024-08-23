class Category < ApplicationRecord
  # Validations
  validates :name, presence: true, length: { minimum: 2, maximum: 20 }

  has_one_attached :image
  has_and_belongs_to_many :restaurants

  def imageUrl
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end
end
