class Herb < ApplicationRecord
  validates :name, :is_watered, presence: true
  validates :name, uniqueness: true

  validate :should_be_yes_or_no

  def should_be_yes_or_no
    if self.is_watered.downcase != 'yes' || self.is_watered.downcase != 'no'
      errors.add(:is_watered, "Should be yes or no")
    end
  end
end
