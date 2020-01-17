function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}

const game = new Game();

function preload() {
  console.log("PRELOAD");
  game.init();
}

function setup() {
  // createCanvas(width, height)
  createCanvas(384, 216); // to match the bg images dimensions
  game.setup();
}

function draw() {
  game.draw();
}

document.body.style.display = "flex";
document.body.style.justifyContent = "center";
