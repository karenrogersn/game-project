class Game {
  constructor($canvas, context) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    //this.width = $canvas.width;
    //this.height = $canvas.height;
    this.setKeyBindings();
    //this.character.drawBoundaries();
  }

  //Function to start game adn instantiate characters
  startGame() {
    console.log('Im startGame and im running');
    this.background = new Background(this);
    this.character = new Character(this);
    this.enemiesArray = [];

    //this two variables are for enemy creation control
    this.enemyTimer = 0;
    this.enemyTimeDiff = 5000; //this is equal to 5 seconds between each enemy

    //Calling function to move enemies to the left and draw the game every 3 miliseconds
    this.loop();
    // Calling function to add enemy to enemies array
    this.createEnemyLoop();
  }

  //with every iteration,runlogic runs and enemies move to the left
  runLogic() {
    for (let enemy of this.enemiesArray) {
      enemy.runLogic();
      enemy.checkCollisionEC(); //every enemy checks the collision itself, because they're inside loop
    }
  }

  //function to clear the canvas
  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  //Function to draw everything
  drawGame() {
    this.clearScreen();
    this.background.draw();
    this.character.draw();

    for (let enemy of this.enemiesArray) {
      enemy.draw();
    }
  }

  //Control keys to move the character
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 38: //up
          //console.log(`moving up on game`);
          this.character.moveUp();
          break;
        case 40: //down
          //console.log(`moving down on game`);
          this.character.moveDown();
          break;
      }
    });
  }
  // Adding enemy to enemies array
  createEnemyLoop(timestamp) {
    if (this.enemyTimer < timestamp - this.enemyTimeDiff) {
      this.enemyTimer = timestamp;
      const enemy = new Enemy(this);
      this.enemiesArray.push(enemy);
    }

    // Runs itself
    /*
    setTimeout(() => {
      this.createEnemyLoop();
    }, 5000); //adding 1 enemy to the array every 5 secs.
    */
  }

  // Runs logic
  loop(timestamp) {
    this.runLogic();
    this.character.drawBoundaries();
    this.createEnemyLoop(timestamp);
    // Draws to the canvas
    this.drawGame();

    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    // Runs itself
    /*
    setTimeout(() => {
      this.loop();
    }, 300);
    */
  }
} //end of game class
