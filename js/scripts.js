var player1 = "";
var player2 = "";
var x = function () {
  return Math.floor(Math.random()*6)+1;
}
function Player(turn) {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.turn = turn;
this.playerName;
}
Player.prototype.roll1 = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry "+this.playerName+ "you rolled a 1!It's Player's 2 turn now")

  }else {
    this.totalscore += this.tempscore;
  }
}
