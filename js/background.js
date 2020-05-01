class Background {
  constructor(game) {
    this.game = game;
    this.x = 0;

    this.backgroundImage = new Image();
    this.backgroundImage.src =
      '../images/background/space-background-deiland.jpg';
  }

  //Drawing the background and making it move

  draw() {
    const context = this.game.context;
    context.drawImage(this.backgroundImage, this.x, 0);
    context.drawImage(
      this.backgroundImage,
      this.x + this.backgroundImage.width,
      0
    );
    context.drawImage(
      this.backgroundImage,
      this.x + this.backgroundImage.width * 2,
      0
    );
  }

  runLogic() {
    this.x--;

    if (this.backgroundImage.width) {
      this.x = this.x % this.backgroundImage.width;
    }
  }
} //end of class background

/*

*/
