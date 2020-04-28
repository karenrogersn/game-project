class Game {
  constructor($canvas, context) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    //this.wight = $canvas.width;
    //this.height = $canvas.height;
    this.setKeyBindings();
  }

  /*createEnemy() {
    //esta funcion crea un enemy y lo agrega al array
    const height = this.$canvas.height;
    const width = this.$canvas.width;
    
    const enemy = new Enemy(
      game,
      this.character.x + 20,
      Math.floor(Math.random() * height)
      );
      this.enemiesArray.push(enemy);
    }*/

  //Function to start game adn instantiate characters
  startGame() {
    console.log('Im startGame and im running');
    this.background = new Background(this);
    this.character = new Character(this);
    this.enemiesArray = [];

    /*
    for (let i = 0; i < 5; i++) {
      const enemy = new Enemy(this);
      this.enemiesArray.push(enemy);
    }
    */

    this.loop();
    this.createEnemyLoop();
  }

  runLogic() {
    for (let enemy of this.enemiesArray) {
      enemy.runLogic();
    }
  }

  //function to clear the canvas
  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  //Function to draw everything
  drawGame() {
    this.clearScreen();
    this.background.drawBackground();
    this.character.drawCharacter();

    for (let enemy of this.enemiesArray) {
      enemy.drawEnemy();
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

  createEnemyLoop() {
    // Adding enemy to enemies array
    const enemy = new Enemy(this);
    this.enemiesArray.push(enemy);

    // Runs itself
    setTimeout(() => {
      this.createEnemyLoop();
    }, 1500);
  }

  loop() {
    // Runs logic
    this.runLogic();

    // Draws to the canvas
    this.drawGame();

    // Runs itself
    setTimeout(() => {
      this.loop();
    }, 200);
  }
}

/*agregar función para establecer limites superior e inferior del cavas:
  // if (this.character.y > 400) {
this.character.drawCharacter(); o this.character.y = 200 o algo asi 
  }
  if (this.y < 0) {
  this.character.drawCharacter();
  }
*/

//Función alternativa para mover el character
/*
  character = {
    //left: false,
    //right: false,
    up: false,
    down: false,

    keyListener: function (event) {
      var key_state = event.type == 'keydown' ? true : false;

      switch (event.keyCode) {
        case 38: //up
          character.up = key_state;
          console.log(`moving up`);
          break;
        case 40: //down
          character.down = key_state;
          console.log(`moving dow`);
          break;
      }
    },
  };

/*window.addEventListener('keydown', character.keyListener);
window.addEventListener('keyup', character.keyListener)
*/
