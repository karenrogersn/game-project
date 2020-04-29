class Gun {
  constructor(game, x, y) {
    this.game = game;
    this.x = this.game.$canvas.width;
    this.y = Math.random() * 400;
    //this.speed = 1;
    this.width = 40;
    this.height = 30;

    this.gunURL = '/../images/gun_transparent.png';
    this.gunImage = new Image();
    this.gunImage.src = this.gunURL;
  }

  draw() {
    const context = this.game.context;
    context.drawImage(this.gunImage, this.x, this.y, this.width, this.height);
  }

  //moves the guns to <-- in every iteration
  runLogic() {
    this.x--;
  }

  catchingGun() {
    if (
      this.game.character.x > this.x - this.width / 4 &&
      this.game.character.x < this.x + this.width / 4 &&
      this.game.character.y > this.y - this.height &&
      this.game.character.y < this.y + this.height
    ) {
      //this.game.scoreBoard.life--;
      console.log(`spaceman caught a gun`); //add result: character life -=1, display in scoreboard and add noise
    }
  }
} //end of gun class
