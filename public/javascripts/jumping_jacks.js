var JumpingJacks = {
  onReady : function() {
    $("a[id!=start]").hide();
    var timer = new Timer();
    timer.interval = 5000;
    timer.Tick = JumpingJacks.tick;
    $("#start").click(JumpingJacks.start);
    $("#stop").click(JumpingJacks.stop);
    $("#reset").click(JumpingJacks.reset);
  },
  tick : function() {
    alert("tick");
  },
  start : function(timer) {
    alert("start")
    return false;
  },
  stop : function(timer) {
    alert("stop")
    return false;
  },
  reset : function(timer) {
    alert("reset")
    return false;
  }
};

