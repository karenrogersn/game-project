class Game {
  constructor($canvas, context) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');

    this.width = $canvas.width;
    this.height = $canvas.height;
    this.setKeyBindings();
  }

  //Function to start game adn instantiate characters
  startGame() {
    this.gameIsRunning = true; //game starts running before anything
    gameMusic.play();
    this.background = new Background(this);
    this.character = new Character(this);
    this.enemiesArray = [];
    this.gunArray = [];
    this.scoreboard = new Scoreboard(this);

    //this two variables are for enemy creation control
    this.enemyTimer = 0;
    this.enemyTimeDiff = 2000; //this is equal to 2 seconds between each enemy

    this.gunTimer = 0;
    this.gunTimeDiff = 7000; //this is equal to 5 seconds between each enemy

    //Calling function to move enemies to <-- and draw the game every 3 miliseconds
    this.loop();
    // Calling function to add enemy to enemies array
    this.createEnemyLoop();
    //Calling function to create 4 guns every 8 seconds
    this.createGunLoop();
  }

  //with every iteration,runlogic runs and enemies move to the left
  runLogic() {
    for (let i = 0; i < this.enemiesArray.length; i++) {
      const enemy = this.enemiesArray[i]; //asignando al enemy nuestro index, que es basicamente c/alien
      enemy.runLogic();
      enemy.runLogicSpeep();
      //every enemy checks collision, because they're inside loop
      if (enemy.checkCollisionEC()) {
        //every time there's a collision, character loses 1 life
        enemy.loseLives();
        alienSound.play();
        //we erase 1 enemy
        this.enemiesArray.splice(i, 1);
        //and we erase replace it
        i++;
      }
    }

    for (let i = 0; i < this.gunArray.length; i++) {
      const gun = this.gunArray[i];
      gun.runLogic();
      if (gun.catchingGun()) {
        gunSound.play();
        gun.winLives();
        console.log(`I caught a gun`);
        this.gunArray.splice(i, 1);
        i++;
      }
    }

    //Makes the background move to rhe left
    this.background.runLogic();
  }

  //function to clear the canvas
  clearScreen() {
    this.context.clearRect(0, 0, this.width, this.height);
  }

  //Function to draw everything
  drawGame() {
    if (this.gameIsRunning) {
      this.clearScreen();
      this.background.draw();
      this.scoreboard.draw();

      //Drawing enemies
      for (let enemy of this.enemiesArray) {
        enemy.draw();
      }
      //Drawing guns
      for (let gun of this.gunArray) {
        gun.draw();
      }
      this.character.draw();
    }
    //If you lose, "game over" is displayed
    if (this.character.life <= 0) {
      this.scoreboard.gameOver();
      gameMusic.pause();
      gameOverSound.play();
    }
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

  // Adding gun to gun array
  createGunLoop(timestamp) {
    if (this.gunTimer < timestamp - this.gunTimeDiff) {
      this.gunTimer = timestamp;
      const gun = new Gun(this);
      this.gunArray.push(gun);
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

    if (this.gameIsRunning) {
      window.requestAnimationFrame((timestamp) => this.loop(timestamp));
    }
  }
} //end of game class

//Sounds
const gameOverSound = new Audio(
  '../sounds/325412__satchdev__astronaut-says-game-over.mp3'
);

const alienSound = new Audio(
  '../sounds/Alien__bananplyte__attack-3-the-ridge-host.wav'
);

const gunSound = new Audio('../sounds/66807__dj-burnham__laser-shot-1.mp3');

const gameMusic = new Audio('../sounds/alienxxx__raven-1-loop.wav');
gameMusic.loop = true;
