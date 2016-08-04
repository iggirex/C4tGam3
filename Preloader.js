Game.Preloader = function(game) {

  this.preloadBar = null
}

Game.Preloader.prototype = {
  preload:function() {

    this.preloadBar = this.add.sprite(this.world.centerX, this.world.centerY, "preloaderBar")

    this.preloadBar.anchor.setTo(0.5, 0.5)

    this.time.advancedTiming = true

    //setting a preloadbar

    this.load.setPreloadSprite(this.preloadBar)

    //load assets

    this.load.tilemap("map", "assets/level1.csv")

    this.load.image("tileset", "assets/exampleTiles.png")

    this.load.spritesheet("player", "assets/player.png",24,26)


  },

  create:function() {

    this.state.start("Level1")
  }
}
