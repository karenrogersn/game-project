class Scoreboard {
  constructor(game) {
    this.game = game;
  }

  draw() {
    const context = this.game.context;
    const life = this.game.character.life;
    console.log(life);
    context.fillStyle = 'white';
    context.font = '13px Roboto Mono, sans-serif';
    context.fillText(`you have ${life} lives`, 25, 480);
  }

  gameOver() {
    const context = this.game.context;
    context.fillStyle = 'white';
    context.font = '30px Roboto Mono, sans-serif';
    context.fillText(`GAME OVER!`, 250, 250);
  }
} //end of scoreboard class
