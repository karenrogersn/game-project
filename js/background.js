class Background {
  constructor(game) {
    this.game = game;
  }

  //Function to draw background
  drawBackground() {
    //console.log('Im draw back and im running');

    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;

    this.backgroundImage = new Image();
    this.backgroundImage.src = '../images/background/nebula03.png';

    //console.dir(this.backgroundImage);

    this.backgroundImage.addEventListener('load', () => {
      //console.log('image has loaded');
      context.drawImage(this.backgroundImage, 0, 0, width, height);
    });
    //console.log('function ended');
    context.drawImage(this.backgroundImage, 0, 0, width, height);
  }
}
