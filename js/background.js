class Background {
  constructor(game) {
    this.game = game;
    this.backgroundImage = new Image();
    this.backgroundImage.scr = '../images/background/nebula03.png';
  }

  drawBackground() {
    console.log('Im draw back and im running');

    const context = this.game.context;
    const width = this.game.$canvas.width;
    const height = this.game.$canvas.height;

    console.dir(this.backgroundImage);
    //console.log(context);
    //console.log(width);
    //console.log(height);

    this.backgroundImage.addEventListener('load', () => {
      console.log('image has loaded');
      //context.context.drawImage(this.backgroundImage, 0, 0, width, height);
    });
    console.log('function ended');
    context.drawImage(this.backgroundImage, 0, 0, width, height);
  }
}
