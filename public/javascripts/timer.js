var Timer = function()
{
	// Property: Frequency of elapse event of the timer in millisecond
	this.interval = 1000;

	// Property: Whether the timer is enable or not
	this.enable = new Boolean(false);

	// Event: Timer tick
	this.tick;

	// Member variable: Hold interval id of the timer
	var timerId = 0;

	// Member variable: Hold instance of this class
	var thisObject;

	// Function: Start the timer
	this.start = function()
	{
		this.enable = new Boolean(true);
		thisObject = this;
		if (thisObject.Enable)
		{
			thisObject.timerId = setInterval(
				function()
				{
					thisObject.tick();
				}, thisObject.interval);
		}
	};

	// Function: Stops the timer
	this.stop = function()
	{
		thisObject.enable = new Boolean(false);
		clearInterval(thisObject.timerId);
	};

};
