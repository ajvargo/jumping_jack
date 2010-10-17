class TripsController < ApplicationController
  def index
    @today = Trip.today
    @month = Trip.month
    @year = Trip.year
  end

  def create
    trip = Trip.new :duration => params[:counter], :day => Time.now.to_date
    trip.save
    render :partial => 'reports', :locals => {:today => Trip.today, :month => Trip.month, :year => Trip.year}
  end
end
