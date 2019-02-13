import Collectable from './collectable';

class Coin extends Collectable {

  constructor(options) {
    super(options);
    const coinImg = new Image();
    coinImg.src = 'https://www.spriters-resource.com/resources/sheets/107/109971.png';
    this.image = coinImg;
  }

  remove() {
    
    this.game.coins.delete(this);
  }

}

export default Coin;