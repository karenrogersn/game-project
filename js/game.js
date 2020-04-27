class Game {
  constructor($canvas, context) {
    this.$canvas = $canvas;
    this.context = $canvas.getContext('2d');
    //this.wight = $canvas.width;
    //this.height = $canvas.height;
    this.setKeyBindings();
  }

  //function to clear the canvas
  clearScreen() {
    this.context.clearRect(0, 0, this.$canvas.width, this.$canvas.height);
  }

  //Function to start game
  startGame() {
    console.log('Im startGame and im running');
    this.background = new Background(this);
    this.character = new Character(this);
  }

  //Function to draw everything
  drawGame() {
    console.log('Im drawGame and im running');
    this.clearScreen();
    this.background.drawBackground();
    this.character.drawCharacter();
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
}
/*agregar función para establecer limites superior e inferior del cavas:
  // if (this.y > 400) {
this.character.drawCharacter();
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
