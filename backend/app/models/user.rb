class User < ApplicationRecord
  # Validations
  validates :first_name, presence: true, length: { minimum: 2, maximum: 20 }
  validates :last_name, presence: true, length: { minimum: 2, maximum: 20 }
  validates :email, presence: true, uniqueness: true, length: { minimum: 2, maximum: 100 }
  validates :password, presence: true, length: { minimum: 8, maximum: 20 }
  validates :password_confirmation, presence: true
  validates :gender, presence: true, on: :update
  validates :date_of_birth, presence: true, on: :update
  validates :nationality, presence: true, length: { minimum: 2, maximum: 50 }, on: :update

  has_secure_password

  enum role: {
    user: 'user',
    admin: 'admin'
  }

  # Associations
  has_many :addresses
  has_many :reviews
  has_many :orders
  has_many :likes, as: :likeable, dependent: :destroy

  def is_admin?
    role === 'admin'
  end

  private

  def must_be_at_least_16
    return unless date_of_birth.present? && date_of_birth > 16.years.ago.to_date

    errors.add(:date_of_birth, 'You must be at least 16 years old.')
  end
end
