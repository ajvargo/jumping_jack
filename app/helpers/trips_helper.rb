module TripsHelper
  def seconds_to_time(seconds)
    hours = seconds / 3600
    seconds = seconds - hours * 3600
    minutes = seconds / 60
    seconds = seconds - minutes * 60
    time = ""
    time += "#{hours}:" if hours > 0
    time += "0" if minutes < 10
    time += "#{minutes}:"
    time += "0" if seconds < 10
    time += "#{seconds}"
    time
  end

  def pretty_date(day)
    day.strftime("%d-%b")
  end
end
