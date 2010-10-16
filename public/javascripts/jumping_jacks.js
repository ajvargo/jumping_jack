var JumpingJacks = {
  timer : new Timer(),
  onReady : function() {
    $("a[id!=start]").hide();
    JumpingJacks.timer.interval = 5000;
    JumpingJacks.timer.Tick = JumpingJacks.tick;
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

