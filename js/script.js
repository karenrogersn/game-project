const $canvas = document.querySelector('canvas');

const game = new Game($canvas);

console.dir($canvas);
console.log(`console log of the canvas`, $canvas);

game.startGame();
