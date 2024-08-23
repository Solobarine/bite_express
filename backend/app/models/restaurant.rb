class Restaurant < ApplicationRecord
  has_secure_password

  # Serialization
  serialize :location, coder: JSON
  serialize :opening_hours, coder: JSON

  # Validations
  validates :name, presence: true, length: { minimum: 2, maximum: 100 }
  validates :email, presence: true, uniqueness: true
  validates :address, presence: true, length: { minimum: 2, maximum: 100 }
  validates :state, presence: true, length: { minimum: 2, maximum: 100 }
  validates :country, presence: true, length: { minimum: 2, maximum: 100 }
  validates :phone_no, presence: true, on: :update
  validates :description, presence: true, length: { minimum: 10, maximum: 500 }, on: :update
  validates :location, presence: true, on: :update
  validates :opening_hours, presence: true, on: :update

  # Associations
  has_one_attached :image
  has_many :meals
  has_many :reviews
  has_many :likes, as: :likeable, dependent: :destroy
  has_and_belongs_to_many :categories

  def imageUrl
    Rails.application.routes.url_helpers.url_for(image) if image.attached?
  end

  def reviews_aggregation
    grouped_reviews = reviews.group(:ratings).count
    total_reviews = reviews.count
    average_rating = reviews.average(:ratings).to_f.round(2)

    {
      grouped_reviews:,
      total_reviews:,
      average_rating:
    }
  end

  def total_and_average_ratings
    {total_reviews: reviews.count, average_rating: reviews.average(:ratings).to_f.round(2)}
  end
end
