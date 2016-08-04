var game = new Phaser.Game(window.innerWidth, window.innerHeight)

game.state.add("Boot", Game.Boot)
game.state.add("Preloader", Game.Preloader)
game.state.add("MainMenu", Game.MainMenu)
game.state.add("Level1", Game.Level1)
game.state.add("Preloader", Game.Preloader)

game.state.start("Boot")
