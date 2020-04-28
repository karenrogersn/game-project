class Character {
  constructor(game) {
    this.game = game;
    this.x = 10;
    this.y = 150;
    this.characterWidth = 80;
    this.characterHeight = 100;

    this.characterURL = '../images/spaceman.png';
    this.characterImage = new Image();
    this.characterImage.src = this.characterURL;
  }

  //Function to draw character
  drawCharacter() {
    //console.log(`Im the character and Im running`);
    const context = this.game.context;

    context.drawImage(
      this.characterImage,
      this.x,
      this.y,
      this.characterWidth,
      this.characterHeight
    );
  }

  //Functions to move the character
  moveUp() {
    //console.log(`moving up`);
    //const y = this.y;
    this.y -= 10;
    console.log(this.y);
  }

  moveDown() {
    //console.log(`moving down`);
    this.y += 10;
    console.log(this.y);
  }
}
