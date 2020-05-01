class Character {
  constructor(game) {
    this.game = game;
    this.x = 10;
    this.y = 200;
    this.width = 80;
    this.height = 90;
    this.life = 3;
    this.speedY = 1;
    this.speedX = 1;
    this.friction = 10;

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
  moveLeft() {
    //console.log(`moving left`);
    this.speedX -= 5;
  }

  moveUp() {
    //console.log(`moving up`);
    this.speedY -= 5;
    //console.log(this.y);
  }

  moveRight() {
    //console.log(`moving right`);
    this.speedX += 5;
  }

  moveDown() {
    //console.log(`moving down`);
    this.speedY += 5;
    //console.log(this.y);
  }

  movingCharacter() {
    const x = this.x;
    const y = this.y;
    const speedX = this.speedX;
    const speedY = this.speedY;
    const friction = this.friction;

    let newVelocityX = speedX / (1 + (friction / 1000) * 16);
    let newVelocityY = speedY / (1 + (friction / 1000) * 16);

    let newPositionX = x + newVelocityX;
    let newPositionY = y + newVelocityY;

    if (this.checkBoundariesY()) {
      //my character is going outside the canvas in the Y direction
      newPositionY = this.y;
      newVelocityY = 0;
    }

    if (this.checkBoundariesX()) {
      //my character is going outside the canvas in the Y direction
      newPositionX = this.x;
      newVelocityX = 0;
    }

    this.speedX = newVelocityX;
    this.speedY = newVelocityY;
    this.x = newPositionX;
    this.y = newPositionY;
  }

  checkBoundariesY() {
    const canvasHeight = this.game.$canvas.height;
    if (
      this.y + this.speedY <= 0 ||
      this.y + this.height + this.speedY >= canvasHeight
    ) {
      return true;
    }
  }

  checkBoundariesX() {
    const canvasWidth = this.game.$canvas.width;
    if (
      this.x + this.speedX <= 0 ||
      this.x + this.width + this.speedX >= canvasWidth
    ) {
      return true;
    }
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
      this.x += 1;
    }
  }
} //end of class character
