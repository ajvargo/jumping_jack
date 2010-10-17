var JumpingJacks = {
  onReady : function() {
    $("#stop").hide();
    $("#start a").click(JumpingJacks.start);
    $("#stop a").click(JumpingJacks.stop);
    $("#reset a").click(JumpingJacks.reset);
  },
  start : function() {
    JumpingJacks.toggleLinks();

    return false;
  },
  stop : function() {
    JumpingJacks.toggleLinks();

    return false;
  },
  reset : function() {

    return false;
  },
  toggleLinks : function(){
    $("#start").toggle();
    $("#stop").toggle();
  }
};

