class Order < ApplicationRecord
  belongs_to :meal
  belongs_to :user
  belongs_to :address

  # Validations
  validates :meal_id, presence: true
  validates :address_id, presence: true
  validates :quantity, presence: true, numericality: true, comparison: { greater_than: 0, less_than_or_equal_to: 10 }

  enum status: {
    pending: 'pending',
    paid: 'paid',
    in_delivery: 'in delivery',
    completed: 'completed',
    failed: 'failed'
  }
end
