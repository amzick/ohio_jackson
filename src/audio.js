class Audio {
  constructor(theme = false) {
    if (theme) {
      this.theme = document.createElement("audio");
      this.theme.src = "https://s3.amazonaws.com/letsgoeros-dev/indiana-jones-theme-song-8-bit-remix-cover-version-8-bit-universe.mp3";
      this.theme.loop = true;
      this.theme.load();
      this.theme.volume = 0.4;
    }

    this.coin = document.createElement("audio");
    this.coin.src = "https://s3.amazonaws.com/letsgoeros-dev/sfx_coin.mp3";
    this.coin.load();

    this.fruit = document.createElement("audio");
    this.fruit.src = "https://s3.amazonaws.com/letsgoeros-dev/sfx_get_fruit.wav";
    this.fruit.load();

    this.hurt = document.createElement("audio");
    this.hurt.src = "https://s3.amazonaws.com/letsgoeros-dev/sfx_mc_hurt.wav";
    this.hurt.load();

    this.boost = document.createElement("audio");
    this.boost.src = "https://s3.amazonaws.com/letsgoeros-dev/sfx_boost.mp3";
    this.boost.load();

    this.death = document.createElement("audio");
    this.death.src = "https://s3.amazonaws.com/letsgoeros-dev/sfx_death.mp3";
    this.death.load();
  }

  playTheme() {
    this.theme.play();
  }

  stopTheme() {
    this.theme.pause();
  }

  playCoin() {
    this.coin.play();
  }

  playHurt() {
    this.hurt.play();
  }

  playFruit() {
    this.fruit.play();
  }

  playBoost() {
    this.boost.play();
  }

  playDeath() {
    this.death.play();
  }
}

export default Audio;