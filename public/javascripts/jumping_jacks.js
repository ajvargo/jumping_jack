var JumpingJacks = {
  onReady : function() {
    $("#stop").hide();
    $("#start a").click(JumpingJacks.start);
    $("#stop a").click(JumpingJacks.stop);
    $("#reset a").click(JumpingJacks.reset);
    var param = window.location.href.split('=');
    if(param.length>1) JumpingJacks.counter = param[1];
    JumpingJacks.updatePage();
  },
  counter: 0,
  tick : function() {
    JumpingJacks.counter += 1;
    JumpingJacks.updatePage();
  },
  start : function() {
    JumpingJacks.toggleLinks();
    $("#counter").everyTime("1s", "jumpupjumpupjumparound", JumpingJacks.tick);
    return false;
  },
  stop : function() {
    JumpingJacks.toggleLinks();
    $("#counter").stopTime("jumpupjumpupjumparound");
    return false;
  },
  reset : function() {
    JumpingJacks.counter = 0;
    JumpingJacks.updatePage();
    return false;
  },
  toggleLinks : function(){
    $("#start").toggle();
    $("#stop").toggle();
  },
  updatePage : function(){
    $("#counter").html(JumpingJacks.time);
  },
  time : function(){
    if(JumpingJacks.counter == 0) return "0:00";
    var seconds = JumpingJacks.counter;
    var hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    var minutes = Math.floor(seconds / 60);
    seconds -= minutes * 60;
    return (hours>0 ? hours + ":" : "" ) + (minutes<10 ? "0" : "") + minutes + ":" + (seconds<10 ? "0" : "") + seconds;
  }
};

