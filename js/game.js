class Game {
  constructor($canvas) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
  }
  startGame() {
    //console.log('im start game and im running');
    this.background = new Background(this);
    this.background.drawBackground();
  }
}
