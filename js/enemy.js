class Enemy {
  constructor(game, x, y) {
    this.game = game;
    //(this.x = this.game.$canvas.width - 50), Math.random() * 700; //position x from the right end and ramdon positioned
    this.x = this.game.$canvas.width;
    this.y = Math.random() * 400;
    //this.speed = 1;
    this.width = 80;
    this.height = 80;

    this.enemyImage = new Image();
    this.enemyImage.src = '../images/alien2.png';
  }
  //Function to draw the enemy
  draw() {
    const context = this.game.context;

    context.drawImage(this.enemyImage, this.x, this.y, this.width, this.height);
  }

  //moves the enemy to <-- in every iteration
  runLogic() {
    this.x--;
  }

  //Function to check enemy - character collision
  checkCollisionEC() {
    if (
      this.game.character.x > this.x - this.width / 2 &&
      this.game.character.x < this.x + this.width / 2 &&
      this.game.character.y > this.y - this.height &&
      this.game.character.y < this.y + this.height
    ) {
      console.log(`another collision`); //add result: character life -=1, display in scoreboard and add noise
      return true;
    }
  }

  loseLives() {
    this.game.character.life--;
    if (this.game.character.life <= 0) { //si el character perdió todas sus vidas
      this.game.gameIsRunning = false;

      
      console.log(`game over`);
      
    }
  }
} //end of class enemy
