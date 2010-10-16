class Trip < ActiveRecord::Base
  validates :day, :presence => true, :date => true
  validates :duration, :presence => true, :numericality => {:integer_only => true, :greater_than => 0}
end
