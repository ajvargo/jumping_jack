var JumpingJacks = {
  onReady : function() {
    $("#stop").hide();
    $("#jumper").hide();
    $("#start a").click(JumpingJacks.start);
    $("#stop a").click(JumpingJacks.stop);
    $("#reset a").click(JumpingJacks.reset);
    $("#save a").click(JumpingJacks.save);
    var param = window.location.href.split('=');
    if(param.length>1) JumpingJacks.counter = param[1];
    $("#counter").addClass("off").removeClass("on");
    JumpingJacks.updateCounter();
  },
  counter: 0,
  tick : function() {
    JumpingJacks.counter += 1;
    JumpingJacks.updateCounter();
  },
  start : function() {
    JumpingJacks.toggle();
    $("#counter").addClass("on").removeClass("off").everyTime("1s", "jumpupjumpupjumparound", JumpingJacks.tick);
    return false;
  },
  stop : function() {
    JumpingJacks.toggle();
    $("#counter").addClass("off").removeClass("on").stopTime("jumpupjumpupjumparound");
    return false;
  },
  reset : function() {
    JumpingJacks.counter = 0;
    JumpingJacks.updateCounter();
    return false;
  },
  toggle : function(){
    $("#start").toggle();
    $("#stop").toggle();
    $("#jumper").toggle();
    $("#save").toggle();
  },
  updateCounter : function(){
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
  },
  save : function(event){
    if(JumpingJacks.counter == 0) return false;
    event.preventDefault();
    $.post("/trips/create/" + JumpingJacks.counter, function(html){JumpingJacks.updatePage(html)});
    return false;
  },
  updatePage : function(html){
    $("#reports").html(html);
  }
};

