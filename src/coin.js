import Collectable from './collectable';

class Coin extends Collectable {

  constructor(options) {
    super(options);
    const coinImg = new Image();
    // coinImg.src = 'https://www.spriters-resource.com/resources/sheets/107/109971.png';
    // coinImg.src = './images/ring.png';
    coinImg.src = "https://www.spriters-resource.com/resources/sheets/78/81059.png";
    this.image = coinImg;
    this.frameIndicies = [
      [2, 1, 61, 62],
      [68, 1, 60, 62],
      [133, 1, 58, 52],
      [201, 1, 51, 62],
      [12, 65, 46, 62],
      [81, 65, 35, 62],
      [148, 65, 29, 62],
      [214, 65, 23, 62],
      [23, 129, 19, 62],
      [83, 129, 24, 62],
      [145, 129, 28, 62],
      [205, 129, 35, 62],
      [7, 193, 46, 62],
      [67, 193, 54, 62],
      [130, 193, 58, 62],
      [193, 193, 61, 62]
    ];

  }

  update() {
    this.tickCount += 1;
    if (this.tickCount > (15 * this.ticksPerFrame)) {
      this.tickCount = 0;
    }
    const index = Math.floor(this.tickCount / this.ticksPerFrame);
    this.sX = this.frameIndicies[index][0];
    this.sY = this.frameIndicies[index][1];
    this.sWidth = this.frameIndicies[index][2];
    this.sHeight = this.frameIndicies[index][3];
    this.width = this.sWidth / 4;
    this.height = this.sHeight / 4;
  }

  remove() {
    this.game.coins.delete(this);
  }

  static new(game, canvas) {
    const range = Math.random() * (25 - 7) + 7;
    const validStartX = Math.random() * (canvas.width - 15 - 16 - range) + (16 + range);
    const validStartY = Math.random() * (canvas.height - 15 - 16 - range) + (16 + range);

    const direction = ["V", "H"][Math.floor(Math.random() * (2 - 0) + 0)];
    const switchDirection = [true, false][Math.floor(Math.random() * (2 - 0) + 0)];

    return new Coin({
      game,
      sX: 2,
      sY: 1,
      sWidth: 61,
      sHeight: 62,
      startX: validStartX,
      startY: validStartY,
      speed: 0.3,
      dX: 1,
      width: 12,
      height: 12,
      range,
      direction,
      switchDirection
    });
  }

}

export default Coin;