const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

console.dir($canvas);
console.log(`console log of the canvas`, $canvas);

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    game.startGame();
    game.drawGame();
  };
};

//game.startGame();
