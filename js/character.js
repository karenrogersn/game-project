class Character {
  constructor(game) {
    this.game = game;
    this.x = 10;
    this.y = 200;
    this.width = 80;
    this.height = 90;
    this.life = 3;
    this.speed = 2;

    this.characterURL = '../images/spaceman.png';
    this.characterImage = new Image();
    this.characterImage.src = this.characterURL;
  }

  //Function to draw character
  draw() {
    //console.log(`Im the character and Im running`);
    const context = this.game.context;
    /*
    this.game.context.save();
    const angle = (45 * Math.PI) / 180;
    const opositeAngle = Math.PI / 2 - angle;
    this.game.context.rotate(angle);
    const y = Math.sin(opositeAngle) / this.y;
    const x = Math.cos(opositeAngle) / this.x;
    this.game.context.restore();
    */
    context.drawImage(
      this.characterImage,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }

  //Functions to move the character
  moveLeft() {
    //console.log(`moving left`);
    this.x -= 10;
  }

  moveUp() {
    //console.log(`moving up`);
    //const y = this.y;
    this.y -= 10;
    //console.log(this.y);
  }

  moveRight() {
    //console.log(`moving right`);
    this.x += 10;
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
      //console.log(`character off the upper limit`);
    }
    if (this.y >= canvasHeight - 80) {
      this.y -= 10;
      //console.log(`character off the down limit`);
    }

    if (this.x < 0) {
      this.x += 2;
    }
  }
} //end of class character
