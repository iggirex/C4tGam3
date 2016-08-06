EnemyMojito = function(index, game, x, y) {

  this.enemyMojito = game.add.sprite(x, y, "Mojito")
  this.enemyMojito.anchor.setTo(0.5, 0.5)
  this.enemyMojito.name = index.toString()
  game.physics.enable(this.enemyMojito, Phaser.Physics.ARCADE)
  this.enemyMojito.body.immovable = true
  this.enemyMojito.body.collideWorldBounds = true

  this.enemyMojitoTween = game.add.tween(this.enemyMojito).to({
    y: this.enemyMojito.y + 100
  }, 2000, "Linear", true, 0, 100, true)
}


Game.Level1 = function(game){}

var map
var layer

var player
var controls = {}
var playerSpeed = 2
var enemy1

var shootTime = 0
var bullets

Game.Level1.prototype = {
  create: function() {
    this.stage.backgroundColor = "#00ffff"

    this.background = this.game.add.tileSprite( 0, 0, 102400, 10240, "background")

     this.physics.arcade.gravity.y = 0

    //  this.world.enableBody = true

    map = this.add.tilemap("map", 64, 64)

    map.addTilesetImage("tileset")

    layer = map.createLayer(0)

    layer.resizeWorld()

    map.setCollisionBetween(0,60)

    map.setTileIndexCallback(78, this.goLevelDos, this)

    map.setTileIndexCallback(10, this.nextLevel, this)  // blue one

    // map.setTileLocationCallback(4, 60, 20, 20, goLevelDos)


    player = this.add.sprite(100, 150, "player")
    player.anchor.setTo(0.5, 0.5)

    // player.animations.add("idle", [0,1], 1, true)
    // player.animations.add("jump", [2], 1, true)
    // player.animations.add("run", [3,4,5,6,7,8], 7, true)

    this.physics.arcade.enable(player)
    this.camera.follow(player)
    player.body.collideWorldBounds = true

    // this.cursor = game.input.keyboard.createCursorKeys()
    // this.player.body.collideWorldBounds = true

    controls = {
      right: this.input.keyboard.addKey(Phaser.Keyboard.D),
      left: this.input.keyboard.addKey(Phaser.Keyboard.A),
      up: this.input.keyboard.addKey(Phaser.Keyboard.W),
      down: this.input.keyboard.addKey(Phaser.Keyboard.S),
      shoot: this.input.keyboard.addKey(Phaser.Keyboard.UP)
    }

    enemy1 = new EnemyMojito(0, this.game, player.x + 400, player.y)

    bullets = this.add.group()

    bullets.enableBody = true
    bullets.physicsBodyType = Phaser.Physics.ARCADE
    bullets.createMultiple(50, "bullets")

    bullets.setAll("anchor.x", 0.5)
    bullets.setAll("anchor.y", 0.5)

    bullets.setAll("scale.x", 0.3)
    bullets.setAll("scale.y", 0.3)

    bullets.setAll("outOfBoundsKill", true)
    bullets.setAll("checkWorldBounds", true)

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

    if(controls.shoot.isDown){
      this.shootBullet()
    }

    if(checkOverlap(player, enemy1.enemyMojito)) {
      this.resetPlayer()

    }

    if(checkOverlap(bullets, enemy1.enemyMojito)) {
      enemy1.enemyMojito.kill()
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

     resetPlayer: function() {
       player.reset(100, 500)
     },

     nextLevel: function() {

       this.state.start("Level2")

     },

     shootBullet: function() {
       if(this.time.now > shootTime){
         bullet = bullets.getFirstExists(false)
          if(bullet) {
            bullet.reset(player.x,player.y)

            bullet.body.velocity.y = -600

            shootTime = this.time.now + 100
          }
       }
     }
}

function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds()
  var boundsB = spriteB.getBounds()

  return Phaser.Rectangle.intersects(boundsA, boundsB)
}
