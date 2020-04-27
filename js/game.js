class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
  }
  startGame() {
    console.log('Im game and im running');
    this.background = new Background(this);
    this.background.drawBackground();
    this.character = new Character(this);
    this.character.drawCharacter();
  }
}
