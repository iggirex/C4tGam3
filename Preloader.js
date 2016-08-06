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

    this.load.tilemap("map", "assets/catKirby.csv")

    this.load.tilemap("map2", "assets/catKirby2.csv")

    this.load.image("background", "assets/space-08.jpg")

    this.load.image("background2", "assets/coolSpace.jpg")

    this.load.image("tileset", "assets/kirbyTiles.png")

    this.load.spritesheet("player", "assets/CaptainKitty.png", 130 ,87)

    this.load.spritesheet("Mojito", "assets/enemyMojito2.png")

    this.load.spritesheet("Margarita", "assets/enemyMargarita.png")

    this.load.image("bullets", "assets/weezyBullet.png")




  },

  create:function() {

    this.state.start("Level1")
  }
}
