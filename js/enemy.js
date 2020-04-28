class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.x = game.character.x * 7;

    //me aseguro que sea a la derecha del canvas
    this.y = Math.floor(Math.random() * 500);
    // randomly entre cero y el height of canvas
    //this.speed = 1;
    this.enemyWidth = 80;
    this.enemyHeight = 100;

    this.enemyImage = new Image();
    this.enemyImage.src = '../images/alien2.png';
  }

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
