import Moveable from './moveable';

class Player extends Moveable {
  constructor(options) {
    super(options);

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
    if (typeof object === 'Collectable') {
      console.log("Frog hits a coin");
    }
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
    if (this.leftPressed && this.posX > 0) {
      this.dX -= 1;
      // console.log("left!");
      // this.posX -= 1;
    } else if (this.rightPressed && this.posX < (this.canvas.width - this.width)) {

      this.dX += 1;
      // this.posX += 1;

    }

    if (this.upPressed && this.posY > 0) {
      this.dY -= 1;
    } else if (this.downPressed && this.posY < (this.canvas.height - this.height)) {
      this.dY += 1;
    }
  }
}

export default Player;