class Scoreboard {
  constructor(game) {
    this.game = game;
  }

  drawLosingPts() {
    const context = this.game.context;
    const life = this.character.life;
    console.log(life);
    context.fillStyle = 'white';
    context.font = '15px "Roboto", sans-serif';
    context.fillText(
      'An alien caught you and you lost ${life} life points!',
      25,
      this.game.$canvas.heigth - 25
    );
  }

   //Function to display score
   
   this.gameIsPlaying = true;
   if (this.enemy.checkCollisionEC()) {
     this.scoreBoard.drawLosingPts();
     gameIsPlaying = false;
   }
 }

  drawWinningPts() {
    const context = this.game.context;
    const life = this.character.life;
    console.log(life);
    context.fillText(
      'You gained a spacegun and now have ${life} life points!',
      75,
      this.game.$canvas.heigth - 25
    );
  }
} //end of scoreboard class
