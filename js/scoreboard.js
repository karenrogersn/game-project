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
    context.fillText(`you have ${life} lifepoints`, 25, 480);
  }
} //end of scoreboard class
