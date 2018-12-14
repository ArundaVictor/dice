
  var x = function roll() {
  return Math.floor((Math.random()*6)+1);
}


$(document).ready(function() {

  $("#r1").click(function() {
    $("#roll1").val(x);
  });
  $("#r2").click(function() {
    $("#roll2").val(x);
  });

    $(".button").click(function() {
    $(".row").slideToggle();
    $("#hold").slideToggle();
  });
});
