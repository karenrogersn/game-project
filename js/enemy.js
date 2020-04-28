class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.width = $canvas.width;
    this.height = $canvas.height;
    (this.x = this.width - 50), Math.random() * 700; //position x from the right end and ramdon positioned
    this.y = Math.random() * 500; // randomly entre cero y el height of canvas
    //this.speed = 1;
    this.enemyWidth = 80;
    this.enemyHeight = 80;

    this.enemyImage = new Image();
    this.enemyImage.src = '../images/alien2.png';
  }

  //moves the enemy to the left in every
  runLogic() {
    this.x--;
  }

  //Function to draw the enemy
  drawEnemy() {
    const context = this.game.context;

    context.drawImage(
      this.enemyImage,
      this.x,
      this.y,
      this.enemyWidth,
      this.enemyHeight
    );
  }
}

//Fijar límites para los enemies en el canvas
