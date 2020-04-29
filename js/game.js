class Game {
  constructor($canvas, context) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    this.width = $canvas.width;
    this.height = $canvas.height;
    this.setKeyBindings();
  }

  //this.loseLives();

  //Function to start game adn instantiate characters
  startGame() {
    //console.log('Im startGame and im running');
    this.background = new Background(this);
    this.character = new Character(this);
    this.enemiesArray = [];
    this.gunArray = [];
    //this.losingPts = new scoreBoard(this);

    //this two variables are for enemy creation control
    this.enemyTimer = 0;
    this.enemyTimeDiff = 2000; //this is equal to 5 seconds between each enemy

    this.gunTimer = 0;
    this.gunTimeDiff = 8000; //this is equal to 5 seconds between each enemy

    //Calling function to move enemies to <-- and draw the game every 3 miliseconds
    this.loop();
    // Calling function to add enemy to enemies array
    this.createEnemyLoop();
    //Calling function to create 4 guns every 8 seconds
    this.createGunLoop();
  }

  //with every iteration,runlogic runs and enemies move to the left
  runLogic() {
    for (let enemy of this.enemiesArray) {
      enemy.runLogic();
      //every enemy checks collision, because they're inside loop
      enemy.checkCollisionEC();

      //this.gun.catchingGun();
    }
    for (let gun of this.gunArray) {
      gun.runLogic();
    }
  }
  //function to clear the canvas
  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  //Function to draw everything
  drawGame() {
    this.clearScreen();
    this.background.draw();
    this.character.draw();
    //this.losingPts.drawLosingPts();

    //Drawing enemies
    for (let enemy of this.enemiesArray) {
      enemy.draw();
    }

    for (let gun of this.gunArray) {
      gun.draw();
    }

    // this.losingPts.drawLosingPts();
  }

  //Pushing guns into the gun array
  newGun() {
    const gun1 = new Gun(this, Math.random() * this.width, Math.random() * 500);
    console.log(`gun1`, gun1.x, gun1.y);
    console.log(this.width);

    const gun2 = new Gun(this, Math.random() * this.width, Math.random() * 500);
    console.log(`gun2`, gun2.x, gun2.y);

    const gun3 = new Gun(this, Math.random() * this.width, Math.random() * 500);
    console.log(`gun3`, gun3.x, gun3.y);

    //console.log(`guns being drawn`);
    this.gunArray.push(gun1, gun2, gun3);
  }

  // Runs itself

  //Control keys to move the character
  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      event.preventDefault();
      const keyCode = event.keyCode;
      switch (keyCode) {
        case 37: //left
          this.character.moveLeft();
          break;
        case 38: //up
          this.character.moveUp();
          break;
        case 39: //right
          this.character.moveRight();
          break;
        case 40: //down
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
  }

  update(gunTimer) {
    this.gunArray = guns;
    this.gunArray.x;
  }

  // Adding gun to enemies array
  createGunLoop(timestamp) {
    if (this.gunTimer < timestamp - this.gunTimeDiff) {
      this.gunTimer = timestamp;
      this.newGun();
      //update(this.gunTimer);
    }
  }

  // Runs logic
  loop(timestamp) {
    this.runLogic();
    this.character.drawBoundaries();
    this.createEnemyLoop(timestamp);
    this.createGunLoop(timestamp);
    // Draws to the canvas
    this.drawGame(timestamp);

    window.requestAnimationFrame((timestamp) => this.loop(timestamp));
  }

  /*loseLives() {
 

  winLives(){
    if(this.gun.catchingGun()) {

    }
  }

  */
}

//end of game class
