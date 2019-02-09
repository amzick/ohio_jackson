// define the function
// argument names from here
// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Using_images

class Moveable {
  construction(options) {
    // eventually I'll have a sprite
    this.image = options.image;
    // need to keep track of the objects x and y pos
    this.posX = options.posX;
    this.posY = options.posY;
    // speed in x and y
    this.dX = options.dX;
    this.dY = options.dY;
  }
}

export default Moveable;