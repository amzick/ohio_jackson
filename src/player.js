import Moveable from './moveable';

class Player extends Moveable {
  constructor(options) {
    super(options);

    const playerImg = new Image();
    // playerImg.src = 'https://www.spriters-resource.com/resources/sheets/86/88720.png';
    playerImg.src = "https://www.spriters-resource.com/resources/sheets/17/18910.png";
    this.image = playerImg;

    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    // add the constructors right away
    document.addEventListener("keydown", this.handleKeydown.bind(this), false);
    document.addEventListener("keyup", this.handleKeyup.bind(this), false);

    this.health = 1;
  }

  hits(object) {
    object.remove();
  }

  handleKeydown(event) {
    if (event.key === "ArrowRight" || event.key === "Right") {
      this.rightPressed = true;
    } else if (event.key === "ArrowLeft" || event.key === "Left") {
      this.leftPressed = true;
    }

    // the up and down are in seperate 
    if (event.key === "ArrowUp" || event.key === "Up") {
      this.upPressed = true;
    } else if (event.key === "ArrowDown" || event.key === "Down") {
      this.downPressed = true;
    }
  }

  handleKeyup(event) {
    if (event.key === "ArrowRight" || event.key === "Right") {
      this.rightPressed = false;
    } else if (event.key === "ArrowLeft" || event.key === "Left") {
      this.leftPressed = false;
    }

    // the up and down are in seperate 
    if (event.key === "ArrowUp" || event.key === "Up") {
      this.upPressed = false;
    } else if (event.key === "ArrowDown" || event.key === "Down") {
      this.downPressed = false;
    }
  }

  // add in can't go through edge of canvas
  move() {
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);
    if (this.leftPressed && this.posX > 16) {
      this.dX -= 1;
      // console.log("left!");
      // this.posX -= 1;
    } else if (this.rightPressed && this.posX < (this.canvas.width - 16 - this.width)) {

      this.dX += 1;
      // this.posX += 1;

    }

    if (this.upPressed && this.posY > 16) {
      this.dY -= 1;
    } else if (this.downPressed && this.posY < (this.canvas.height - 16 - this.height)) {
      this.dY += 1;
    }
  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > (2 * this.ticksPerFrame)) {
      this.tickCount = 0;
    }
    const index = Math.floor(this.tickCount / this.ticksPerFrame);
    let frameIndicies;
    if (this.leftPressed) {
      frameIndicies = [
        [1, 103, 22, 32],
        [25, 103, 22, 32],
        [49, 103, 21, 32]
      ];
    } else if (this.rightPressed) {
      frameIndicies = [
        [73, 103, 22, 32],
        [97, 103, 22, 32],
        [102, 103, 21, 32]
      ];
    } else if (this.downPressed) {
      frameIndicies = [
        [87, 137, 27, 32],
        [115, 137, 28, 32],
        [144, 137, 28, 32]
      ];
    } else if (this.upPressed) {
      frameIndicies = [
        [0, 137, 28, 32],
        [29, 137, 28, 32],
        [58, 137, 28, 32]
      ];
    } else {
      // when stationary
      frameIndicies = [
        [57, 19, 22, 32],
        [57, 19, 22, 32],
        [57, 19, 22, 32]
      ];
    }
    this.sX = frameIndicies[index][0];
    this.sY = frameIndicies[index][1];
    this.sWidth = frameIndicies[index][2];
    this.sHeight = frameIndicies[index][3];
    this.width = this.sWidth * (11 / 16);
    this.height = this.sHeight * (11 / 16);
  }

  static ohio(game) {
    return new Player({
      game,
      canvas: game.canvas,
      sX: 97,
      sY: 103,
      sWidth: 22,
      sHeight: 32,
      startX: game.canvas.width / 2,
      startY: game.canvas.height / 2,
      speed: game.playerSpeed,
      width: 16,
      height: 22
    });
  }
}

export default Player;