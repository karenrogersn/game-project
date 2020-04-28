class Enemy {
  constructor(game, x, y) {
    this.game = game;
    this.x = game.character.x * 7;

    //me aseguro que sea a la derecha del canvas
    this.y = Math.floor(Math.random() * 500);
    // randomly entre cero y el height of canvas
    //this.speed = 1;
    this.enemyWidth = 80;
    this.enemyHeight = 120;
  }
  //Function to draw the enemy
  drawEnemy() {
    console.log('hola soy el enemy');

    const context = this.game.context;

    this.enemyURL = '../images/alien2.png';
    this.enemyImage = new Image();
    this.enemyImage.src = this.enemyURL;
    this.enemyImage.addEventListener('load', () => {
      context.drawImage(
        this.enemyImage,
        this.x,
        this.y,
        this.enemyWidth,
        this.enemyHeight
      );
    });
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
