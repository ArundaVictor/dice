
var rollDice = function() {
  return Math.floor(Math.random()*6)+1;
}
function newPlay() {
  this.roll = 0;
  this.totalScore = 0;
}
newPlay.prototype.roll1 = function() {
  if (this.roll === 1) {
  this.totalScore = 0;
  alert("Sorry you rolled a 1! Your turn is over!");

  } else {
  this.totalScore += this.roll;
  }
}
var hold = function() {
  alert("It's the other player's turn");


  }





$(document).ready(function() {

  $("#r1").click(function(event) {
    $("#roll1").val(rollDice);
    $("#score1").val(rollDice);

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
