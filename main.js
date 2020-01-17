class Player {
  constructor() {
    this.img = loadImage("assets/player/run.gif");
    this.velocity = 0;
    this.gravity = 0.2;
    this.jumpCount = 0;
  }

  setup() {
    this.height = this.img.height;
    this.width = this.img.width;

    this.x = 50;
    this.y = height - this.height;

    this.originY = this.y;
  }

  draw() {
    this.velocity += this.gravity; // over time, the velocity increases
    this.y += this.velocity; // if the velocity is a positive number, y will increment (player fall), if the velocity is a negative number, y will decrement (player rise)

    if (this.y >= this.originY) {
      this.y = this.originY;
      this.jumpCount = 0;
    }

    image(this.img, this.x, this.y);
    // rect(this.x, this.y, this.width, this.height);
  }

  jump() {
    if (this.jumpCount < 2) {
      this.velocity = -6;
      this.jumpCount += 1;
    }
  }
}

function keyPressed() {
  if (keyCode === 32) {
    game.player.jump();
  }
}

class Game {
  constructor() {
    console.log("GAME CONSTRUCTOR");
  }

  init() {
    this.background = new Background();
    this.player = new Player();
  }

  draw() {
    this.background.draw();
    this.player.draw();
  }

  setup() {
    this.player.setup();
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
