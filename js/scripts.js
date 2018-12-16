var player1 = "";
var player2 = "";
var rollDice = function() {
return Math.floor(Math.random()*6)+1;
}
function Play() {
  this.roll = 0;
  this.tempScore = 0;
  this.totalScore = 0;

}

Play.prototype.roll1 = function() {
  if (this.roll === 1) {
  this.tempScore = 0;
  alert("Sorry you rolled a 1! Your turn is over!");

  } else {
  this.tempScore += this.roll;
  }
}
Play.prototype.hold = function() {
  this.totalScore += this.tempScore;
  this.tempScore = 0;
  alert("It's the other player's turn");

  }
  Play.prototype.winner = function() {
    if (this.totalScore >= 100) {
      alert("You win the game!!!")

    }
  }

$(document).ready(function() {
  $(".button").click(function() {
  player1 = new Play(true);
  player2 = new Play(true);
  $(".row").slideToggle();
  $("#hold").slideToggle();
});

  $("#r1").click(function() {
    player1.roll = rollDice();
    $("#roll1").val(player1.roll);
    player1.roll1();
    $("#score1").val(player1.tempScore);

  });
  $("#r2").click(function() {
      player2.roll = rollDice();
    $("#roll2").val(player2.roll);
    player2.roll1();
    $("#score2").val(player2.tempScore);
  });
  $(".btn").click(function(event) {
    player1.hold();
    player2.hold();
    $("#total1").val(player1.totalScore);
    $("#total2").val(player2.totalScore);
    $("#score1").empty();
    $("#roll1").empty();
    $("#score2").empty();
    $("#roll2").empty();
    player1.winner();
    player2.winner();

  });


});
