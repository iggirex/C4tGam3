var Game = function() {}

Game.Boot = function() {

}

Game.Boot.prototype = {
  // init:function() {
  //
  //   this.init.maxPointer = 1
  //
  //   this.stage.disableVisibilityChange = true
  // },

  preload: function() {
    this.load.image("preloaderBar", "assets/images/preloader.png")
  },

  create:function(){

    this.state.start("Preloader")
  }
}
