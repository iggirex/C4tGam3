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

EnemyMarg = function(index, game, x, y) {

  this.enemyMarg = game.add.sprite(x, y, "Margarita")
  this.enemyMarg.anchor.setTo(0.5, 0.5)
  this.enemyMarg.name = index.toString()
  game.physics.enable(this.enemyMarg, Phaser.Physics.ARCADE)
  this.enemyMarg.body.immovable = true
  this.enemyMarg.body.collideWorldBounds = true

  this.enemyMargTween = game.add.tween(this.enemyMarg).to({
    y: this.enemyMarg.x + 100
  }, 3000, "Linear", true, 0, 100, true)
}

Taco = function(index, game, x, y) {

  this.taco = game.add.sprite(x, y, "taco")
  this.taco.anchor.setTo(0.5, 0.5)
  this.taco.name = index.toString()
  game.physics.enable(this.taco, Phaser.Physics.ARCADE)
  this.taco.body.immovable = true
  this.taco.body.collideWorldBounds = true

  this.taco.animations.add("tacoSpin", [0,1,2,3,4,5,6], 1, true)
  this.taco.animations.play("tacoSpin", 5, true)

  // this.enemyMojitoTween = game.add.tween(this.enemyMojito).to({
  //   y: this.enemyMojito.y + 100
  // }, 2000, "Linear", true, 0, 100, true)
}


Game.Level1 = function(game){}

var map
var layer

var player
var controls = {}
// var playerSpeed = 0
var enemy1
var enemy2
var enemy3
var enemyM

var shootTime = 0
var bullets
var bullets2
var shootTime2 = 0
var shootTime3 = 0
var shootTime4 = 0
var shootTime5 = 0


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

    // map.setTileIndexCallback(78, this.goLevelDos, this)

    map.setTileIndexCallback(10, this.nextLevel, this)  // blue one

    // map.setTileLocationCallback(4, 60, 20, 20, goLevelDos)


    player = this.add.sprite(100, 150, "player")
    player.anchor.setTo(0.5, 0.5)
    taco = this.add.sprite(800, 500, "taco")
    taco.animations.add("tacoSpin", [0,1,2,3,4,5,6], 1, true)
    taco.animations.play("tacoSpin", 5, true)

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
      shootup: this.input.keyboard.addKey(Phaser.Keyboard.UP),
      shootright: this.input.keyboard.addKey(Phaser.Keyboard.RIGHT),
      shootdown: this.input.keyboard.addKey(Phaser.Keyboard.DOWN),
      shootleft: this.input.keyboard.addKey(Phaser.Keyboard.LEFT)
    }

    enemy1 = new EnemyMojito(0, this.game, player.x + 1000, player.y)
    enemy2 = new EnemyMojito(1, this.game, player.x + 2000, player.y + 500)
    enemy3 = new EnemyMojito(2, this.game, player.x + 3000, player.y + 700)
    enemyM = new EnemyMarg(3, this.game, player.x + 2500, player.y)

    taco1 = new Taco(0, this.game, player.x + 2000, player.y + 800)

    bullets = this.add.group()
    bullets2 = this.add.group()

    bullets.enableBody = true
    bullets.physicsBodyType = Phaser.Physics.ARCADE
    bullets.createMultiple(500, "bullets")
    bullets2.enableBody = true
    bullets2.physicsBodyType = Phaser.Physics.ARCADE
    bullets2.createMultiple(500, "bullets2")

    bullets.setAll("anchor.x", 0.5)
    bullets.setAll("anchor.y", 0.5)
    bullets2.setAll("anchor.x", 0.5)
    bullets2.setAll("anchor.y", 0.5)

    // bullets.setAll("scale.x", 0.3)
    // bullets.setAll("scale.y", 0.3)
    // bullets2.setAll("scale.x", 0.6)
    // bullets2.setAll("scale.y", 0.6)

    bullets.setAll("outOfBoundsKill", true)
    bullets.setAll("checkWorldBounds", true)
    bullets2.setAll("checkWorldBounds", true)
    bullets2.setAll("checkWorldBounds", true)

  },

  update: function() {


    // var speed = 250
    // this.player.body.velocity.y = 0
    // this.player.body.velocity.x = 0

    this.physics.arcade.collide(player,layer)
    if(this.physics.arcade.collide(player, bullets2)){
      this.resetPlayer()
    }

    this.physics.arcade.collide(player,layer)
    if(this.physics.arcade.collide(player, taco)){
      this.collectTaco()
    }
    // player.body.velocity.x = 0

    if(controls.up.isDown) {
      // player.animations.play("jump")
      player.body.velocity.y -= playerSpeed
    }

    if(controls.right.isDown) {
      // player.animations.play("run")
      player.scale.setTo(1,1)
      player.body.velocity.x += playerSpeed
    }

    if(controls.left.isDown) {
      // player.animations.play("run")
      player.scale.setTo(-1,1)
      player.body.velocity.x -= playerSpeed
    }

    if(controls.down.isDown) {
      // player.animations.play("jump")
      player.body.velocity.y += playerSpeed
    }

    if(controls.shootup.isDown){
      this.shootBulletUp()
    }

    if(controls.shootright.isDown){
      this.shootBulletRight()
    }

    if(controls.shootleft.isDown){
      this.shootBulletLeft()
    }

    if(controls.shootdown.isDown){
      this.shootBulletDown()
    }

    if(checkOverlap(player, enemy1.enemyMojito)) {
      this.state.start("Level1")
    }

    if(checkOverlap(player, enemy2.enemyMojito)) {
      this.state.start("Level1")
    }

    if(checkOverlap(player, enemy3.enemyMojito)) {
      this.state.start("Level1")
    }

    // if(checkOverlap(player, enemyM.enemyMarg)) {
    //   this.resetPlayer()
    // }

    if(checkOverlap(bullets, enemy1.enemyMojito)) {
      enemy1.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy2.enemyMojito)) {
      enemy2.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy3.enemyMojito)) {
      enemy3.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemyM.enemyMarg)) {
      enemyM.enemyMarg.kill()
    }


    // if(this.game.physics.arcade.collide(bullets2, player, this.resetPlayer(), null, this))

    if(this.time.now > shootTime2) {
      this.enemyShoot()
    }

    if(this.time.now > shootTime3) {
      this.enemyShoot2()
    }

    if(this.time.now > shootTime4) {
      this.enemyShoot3()
    }

    // if(this.time.now > shootTime5) {
    //   this.enemyShootM()
    // }



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
       player.reset(100, 100)
     },

     collectTaco: function() {
       this.collectTaco()
     },

     nextLevel: function() {

       this.state.start("Level2")

     },

     shootBulletUp: function() {
       if(this.time.now > shootTime){
         bullet = bullets.getFirstExists(false)
          if(bullet) {
            bullet.reset(player.x,player.y)

            bullet.body.velocity.y = -400

            shootTime = this.time.now + 100
          }
        }
     },

     shootBulletRight: function() {
       if(this.time.now > shootTime){
         bullet = bullets.getFirstExists(false)
          if(bullet) {
            bullet.reset(player.x,player.y)

            bullet.body.velocity.x = 400

            shootTime = this.time.now + 100
          }
        }
     },

     shootBulletLeft: function() {
       if(this.time.now > shootTime){
         bullet = bullets.getFirstExists(false)
          if(bullet) {
            bullet.reset(player.x,player.y)

            bullet.body.velocity.x = -400

            shootTime = this.time.now + 100
          }
        }
     },

     shootBulletDown: function() {
       if(this.time.now > shootTime){
         bullet = bullets.getFirstExists(false)
          if(bullet) {
            bullet.reset(player.x,player.y)

            bullet.body.velocity.y = 400

            shootTime = this.time.now + 100
          }
        }
     },

     enemyShoot: function() {
       if(enemy1.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy1.enemyMojito.x, enemy1.enemyMojito.y)

            bullet.body.velocity.x = -300

            shootTime2 = this.time.now + 2000
          }
        }
     },

     enemyShoot2: function() {
       if(enemy2.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy2.enemyMojito.x, enemy2.enemyMojito.y)

            bullet.body.velocity.x = -300

            shootTime3 = this.time.now + 2000
          }
          }
     },

     enemyShoot3: function() {
       if(enemy3.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy3.enemyMojito.x, enemy3.enemyMojito.y)

            bullet.body.velocity.x = -300

            shootTime4 = this.time.now + 2000
          }
          }
     },

    //  enemyShootM: function() {
    //    if(enemyM.enemyMarg.alive){
    //      bullet = bullets2.getFirstExists(false)
    //       if(bullet) {
    //         bullet.reset(enemy.enemyMarg.x, enemy.enemyMarg.y)
     //
    //         bullet.body.velocity.x = -300
     //
    //         shootTime5 = this.time.now + 2000
    //       }
    //       }
    //  }
}

function checkOverlap(spriteA, spriteB) {
  var boundsA = spriteA.getBounds()
  var boundsB = spriteB.getBounds()

  return Phaser.Rectangle.intersects(boundsA, boundsB)
}
