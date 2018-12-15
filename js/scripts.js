
var rollDice = function() {
  return Math.floor(Math.random()*6)+1;
}
var hold = function() {
  alert("It's the other player's turn");


  }





$(document).ready(function() {

  $("#r1").click(function() {
    $("#roll1").val(rollDice);
  });
  $("#r2").click(function() {
    $("#roll2").val(rollDice);
  });
  $(".btn").click(function() {
    hold();

  });

    $(".button").click(function() {
    $(".row").slideToggle();
    $("#hold").slideToggle();
  });
});
