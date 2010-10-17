class Trip < ActiveRecord::Base
  validates :day, :presence => true
  validates :duration, :presence => true, :numericality => {:integer_only => true, :greater_than => 0}

  scope :sorted, order("trips.day DESC")
  scope :today,  sorted.where("trips.day = ?", Time.now.to_date)
  scope :month,  sorted.where("trips.day <= ?", (Time.now + 1.month).to_date)
  scope :year,  sorted.where("trips.day <= ?", (Time.now + 1.year).to_date)
end
