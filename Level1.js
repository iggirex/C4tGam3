Game.Level1 = function(game){}

var map
var layer

var player
var controls = {}
var playerSpeed = 50
var jumpTimer = 0


Game.Level1.prototype = {
  create: function() {
    // this.stage.backgroundColor = "#00ffff"

    this.background = this.game.add.tileSprite( 0, 0, this.game.width, this.game.height, "background")

    //  this.physics.arcade.gravity.y = 1400

    //  this.world.enableBody = true

    map = this.add.tilemap("map", 64, 64)

    map.addTilesetImage("tileset")

    layer = map.createLayer(0)

    layer.resizeWorld()

    map.setCollisionBetween(0,0)

    player = this.add.sprite(100, 550, "player")
    player.anchor.setTo(0.5, 0.5)

    player.animations.add("idle", [0,1], 1, true)
    player.animations.add("jump", [2], 1, true)
    player.animations.add("run", [3,4,5,6,7,8], 7, true)

    this.physics.arcade.enable(player)
    this.camera.follow(player)
    player.body.collideWorldBounds = true

    // this.cursor = game.input.keyboard.createCursorKeys()
    // this.player.body.collideWorldBounds = true

    controls = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      down: this.input.keyboard.addKey(Phaser.Keyboard.S)
    }
  },

  update: function() {


    // var speed = 250
    // this.player.body.velocity.y = 0
    // this.player.body.velocity.x = 0

    this.physics.arcade.collide(player,layer)

    // player.body.velocity.x = 0

    if(controls.up.isDown) {
      player.animations.play("jump")
      player.body.velocity.y -= playerSpeed
    }

    if(controls.right.isDown) {
      player.animations.play("run")
      player.scale.setTo(1,1)
      player.body.velocity.x += playerSpeed
    }

    if(controls.left.isDown) {
      player.animations.play("run")
      player.scale.setTo(-1,1)
      player.body.velocity.x -= playerSpeed
    }

    // if(controls.up.isDown && (player.body.onFloor() || player.body.touching.down) && this.time.now > jumpTimer) {
    //   player.body.velocity.y = -600
    //   jumpTimer = this.time.now + 750
    // }
    //
    if(controls.down.isDown) {
      player.animations.play("jump")
      player.body.velocity.y += playerSpeed
    }

    // if (this.cursor.up.isDown) {
    //   this.player.body.velocity.y -= speed;
    // } else if (this.cursor.down.isDown) {
    //   this.player.body.velocity.y += speed
    // }
    // if (this.cursor.left.isDown) {
    //   this.player.body.velocity.x -= speed
    // } else if (this.cursor.right.isDown) {
    //   this.player.body.velocity.x += speed
    // }
     },


}
