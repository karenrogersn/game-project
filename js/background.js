class Background {
  constructor(game) {
    this.game = game;

    this.backgroundImage = new Image();
    this.backgroundImage.src = '../images/background/nebula03.png';
  }

  //Function to draw background
  drawBackground() {
    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;

    context.drawImage(this.backgroundImage, 0, 0, width, height);
  }
}
