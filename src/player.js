class Player {
  constructor(options) {
    // need a reference to the canvas?
    this.canvas = options.canvas;
    // eventually I'll have a sprite
    this.image = options.image;
    // need to keep track of the objects x and y pos
    this.startX = options.startX;
    this.startY = options.startY;
    // speed in x and y
    this.speed = options.speed;
    this.dX = 0;
    this.dY = 0;
    // width and height
    this.width = options.width;
    this.height = options.height;

    //end of options

    // movement
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);

    this.leftPressed = false;
    this.rightPressed = false;
    this.upPressed = false;
    this.downPressed = false;
    // add the constructors right away
    document.addEventListener("keydown", this.handleKeydown.bind(this), false);
    document.addEventListener("keyup", this.handleKeyup.bind(this), false);

    //bind draw?
    this.draw = this.draw.bind(this);


  }

  draw(ctx) {
    this.posX = this.startX + (this.dX * this.speed);
    this.posY = this.startY + (this.dY * this.speed);
    // eventually this will be a sprite
    ctx.fillStyle = "purple";
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    // ???
    // this.move();
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

  collides() {
    // ??
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
    // called in draw?

  }
}

export default Player;