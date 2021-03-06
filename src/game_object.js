class GameObject {

  constructor(options) {
    this.game = options.game;
    
    this.isCollidingWith = this.isCollidingWith.bind(this);
  }

  isCollidingWith(gameObject) {
    const that = this;
    if (
      (this.posX < (gameObject.posX + gameObject.width)) &&
        ((this.posX + this.width) > gameObject.posX ) &&
      (this.posY < (gameObject.posY + gameObject.height)) &&
        ((this.posY + this.height) > gameObject.posY)
    ) {
      return true;
    }
    return false;
  }
}

export default GameObject;