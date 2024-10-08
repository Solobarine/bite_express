class Review < ApplicationRecord
  validates :title, length: { minimum: 1, maximum: 300 }
  validates :content, presence: true, length: { minimum: 2, maximum: 500 }
  validates :ratings, presence: true, numericality: true, comparison: { greater_than: 0, less_than_or_equal_to: 5 }

  has_many :likes, as: :likeable, dependent: :destroy
  belongs_to :user, dependent: :destroy
  belongs_to :restaurant, dependent: :destroy
end
