class User < ApplicationRecord
  # Validations
  validates :first_name, presence: true, length: { minimum: 2, maximum: 20 }
  validates :last_name, presence: true, length: { minimum: 2, maximum: 20 }
  validates :email, presence: true, uniqueness: true, length: { minimum: 2, maximum: 100 }
  validates :password, presence: true, length: { minimum: 8, maximum: 20 }
  validates :password_confirmation, presence: true
  validates :gender, presence: true, on: :update
  validates :date_of_birth, presence: true, on: :update
  validates :must_be_at_least_16, on: :update
  validates :state, presence: true, length: { minimum: 2, maximum: 100 }, on: :update
  validates :state, presence: true, length: { minimum: 2, maximum: 50 }, on: :update

  has_secure_password

  # Associations
  has_many :reviews
  has_many :likes

  private

  def must_be_at_least_16
    return unless date_of_birth.present? && date_of_birth > 16.years.ago.to_date

    errors.add(:date_of_birth, 'You must be at least 16 years old.')
  end
end
