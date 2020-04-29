class Character {
  constructor(game) {
    this.game = game;
    this.x = 10;
    this.y = 150;
    this.width = 80;
    this.height = 90;

    this.characterURL = '../images/spaceman.png';
    this.characterImage = new Image();
    this.characterImage.src = this.characterURL;
  }

  //Function to draw character
  draw() {
    //console.log(`Im the character and Im running`);
    const context = this.game.context;

    context.drawImage(
      this.characterImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  //Functions to move the character
  moveUp() {
    //console.log(`moving up`);
    //const y = this.y;
    this.y -= 10;
    //console.log(this.y);
  }

  moveDown() {
    //console.log(`moving down`);
    this.y += 10;
    //console.log(this.y);
  }

  //Function to create canvas boundaries for character
  drawBoundaries() {
    const canvasHeight = this.game.$canvas.height;
    if (this.y < 0) {
      this.y += 10;
      console.log(`character off the upper limit`);
    }
    if (this.y >= canvasHeight - 80) {
      this.y -= 10;
      console.log(`character off the down limit`);
    }
  }
} //end of class character
