
var x = function () {
  return Math.floor(Math.random()*6)+1;
}
function Player(turn) {
this.roll = 0;
this.tempscore = 0;
this.totalscore = 0;
this.turn = turn;
this.current;
}
Player.prototype.roll = function() {
  if (this.roll === 1) {
    this.tempscore = 0;
    alert("Sorry "+this.current+ "you rolled a 1!It's Player's 2 turn now")

  }else {
    this.tempscore += this.roll;
  }
  Player.prototype.hold = function() {
    this.totalscore += this.tempscore;
    this.tempscore = 0;
    alert(this.current + ", It's now the other player's turn");

  }
  Player.prototype.change = function() {
    if (this.roll === 1) {
      this.turn = false;

    }else {
      this.turm = true;
    }
  }
  Player.prototype.win = function() {
    if (this.totalscore>=100) {
      alert(+this.current+ "Wins!!!")

    }
  }
}
