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
var lives = 9;
youDied = function() {
  lives -= 1
  // if(lives === 0) {
  //   this.state.start("Level1")
  // }
}


Game.Level2 = function(game){}

var map
var layer

var player
var controls = {}
var playerSpeed = 50
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
var shootTime6 = 0
var shootTime7 = 0
var shootTime8 = 0
var shootTime9 = 0
var shootTime10 = 0
var lives = 9;


Game.Level2.prototype = {
  create: function() {
    this.stage.backgroundColor = "#00ffff"

    this.background = this.game.add.tileSprite( 0, 0, 102400, 10240, "background")

     this.physics.arcade.gravity.y = 0

     this.lives = 9

    //  this.world.enableBody = true

    map = this.add.tilemap("secondMap", 64, 64)

    map.addTilesetImage("tileset")


    layer = map.createLayer(0)

    layer.resizeWorld()

    map.setCollisionBetween(0,60)

    // map.setTileIndexCallback(78, this.goLevelDos, this)

    map.setTileIndexCallback(10, this.nextLevel, this)  // blue one

    // map.setTileLocationCallback(4, 60, 20, 20, goLevelDos)


    player = this.add.sprite(100, 150, "player")
    player.anchor.setTo(0.5, 0.5)
    taco = this.add.sprite(9800, 9500, "taco")
    taco.animations.add("tacoSpin", [0,1,2,3,4,5,6], 1, true)
    taco.animations.play("tacoSpin", 5, true)

    this.score = 0

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

    enemy4 = new EnemyMojito(2, this.game, player.x + 3000, player.y + 1100)
    enemy5 = new EnemyMojito(2, this.game, player.x + 3500, player.y + 1540)
    enemy6 = new EnemyMojito(2, this.game, player.x + 1500, player.y + 1400)
    enemy7 = new EnemyMojito(2, this.game, player.x + 300, player.y + 800)
    enemy8 = new EnemyMojito(2, this.game, player.x + 300, player.y + 900)
    enemy9 = new EnemyMojito(2, this.game, player.x + 500, player.y + 700)


    taco1 = new Taco(0, this.game, player.x + 2000, player.y + 800)
    taco2 = new Taco(0, this.game, player.x + 300, player.y + 1300)
    taco3 = new Taco(0, this.game, player.x + 3000, player.y + 1200)
    taco4 = new Taco(0, this.game, player.x + 2500, player.y)
    taco5 = new Taco(0, this.game, player.x + 1500, player.y + 800)
    taco6 = new Taco(0, this.game, player.x + 1300, player.y + 1700)
    taco7 = new Taco(0, this.game, player.x + 3500, player.y)
    taco8 = new Taco(0, this.game, player.x + 3500, player.y + 800)
    taco9 = new Taco(0, this.game, player.x + 1600, player.y + 2000)
    taco10 = new Taco(0, this.game, player.x + 2500, player.y + 2100)
    taco12 = new Taco(0, this.game, player.x + 500, player.y + 1500)
    taco13 = new Taco(0, this.game, player.x + 3500, player.y + 2100)
    taco14 = new Taco(0, this.game, player.x + 3600, player.y + 2100)
    taco15 = new Taco(0, this.game, player.x + 3500, player.y + 2200)
    taco16 = new Taco(0, this.game, player.x + 3600, player.y + 2200)






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

    this.scoreText = this.game.add.bitmapText(10,10, 'minecraftia', 'Score: 0', 50)
    this.scoreText.fixedToCamera = true

    this.livesText = this.game.add.bitmapText(420,10, 'minecraftia', 'Lives: ' + lives, 50)
    this.livesText.fixedToCamera = true

  },

  update: function() {

    this.physics.arcade.collide(player,layer)
    if(this.physics.arcade.collide(player, bullets2)){
        youDied()
      this.state.start("Level22")
    }

    this.physics.arcade.collide(player,layer)
    if(this.physics.arcade.collide(player, taco)){
      this.collectTaco()
    }

    if(controls.up.isDown) {
      player.body.velocity.y -= playerSpeed
    }

    if(controls.right.isDown) {
      player.scale.setTo(1,1)
      player.body.velocity.x += playerSpeed
    }

    if(controls.left.isDown) {
      // player.animations.play("run")
      player.scale.setTo(-1,1)
      player.body.velocity.x -= playerSpeed
    }

    if(controls.down.isDown) {
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
      if(enemy1.enemyMojito.alive){
        youDied()
        this.state.start("Level22")
      }
    }

    if(checkOverlap(player, enemy2.enemyMojito)) {
      if(enemy2.enemyMojito.alive){
        youDied()
        this.state.start("Level22")
      }
    }

    if(checkOverlap(player, enemy3.enemyMojito)) {
      if(enemy3.enemyMojito.alive){
        youDied()
        this.state.start("Level22")
      }
    }

    if(taco1.taco.alive && checkOverlap(player, taco1.taco)) {
      this.score += 500
      taco1.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco2.taco.alive && checkOverlap(player, taco2.taco)) {
      this.score += 500
      taco2.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco3.taco.alive && checkOverlap(player, taco3.taco)) {
      this.score += 500
      taco3.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco4.taco.alive && checkOverlap(player, taco4.taco)) {
      this.score += 500
      taco4.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco5.taco.alive && checkOverlap(player, taco5.taco)) {
      this.score += 500
      taco5.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco6.taco.alive && checkOverlap(player, taco6.taco)) {
      this.score += 500
      taco6.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco7.taco.alive && checkOverlap(player, taco7.taco)) {
      this.score += 500
      taco7.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco8.taco.alive && checkOverlap(player, taco8.taco)) {
      this.score += 500
      taco8.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco9.taco.alive && checkOverlap(player, taco9.taco)) {
      this.score += 500
      taco9.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco10.taco.alive && checkOverlap(player, taco10.taco)) {
      this.score += 500
      taco10.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    // if(taco11.taco.alive && checkOverlap(player, taco11.taco)) {
    //   this.score += 500
    //   taco11.taco.kill()
    //   this.scoreText.text = 'Score: ' + this.score
    // }

    if(taco12.taco.alive && checkOverlap(player, taco12.taco)) {
      this.score += 500
      taco12.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco13.taco.alive && checkOverlap(player, taco13.taco)) {
      this.score += 500
      taco13.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco14.taco.alive && checkOverlap(player, taco14.taco)) {
      this.score += 500
      taco14.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco15.taco.alive && checkOverlap(player, taco15.taco)) {
      this.score += 500
      taco15.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
    }

    if(taco16.taco.alive && checkOverlap(player, taco16.taco)) {
      this.score += 500
      taco16.taco.kill()
      this.scoreText.text = 'Score: ' + this.score
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

    if(checkOverlap(bullets, enemy4.enemyMojito)) {
      enemy4.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy5.enemyMojito)) {
      enemy5.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy6.enemyMojito)) {
      enemy6.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy7.enemyMojito)) {
      enemy7.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy8.enemyMojito)) {
      enemy8.enemyMojito.kill()
    }

    if(checkOverlap(bullets, enemy9.enemyMojito)) {
      enemy9.enemyMojito.kill()
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

    if(this.time.now > shootTime5) {
      this.enemyShoot4()
    }

    if(this.time.now > shootTime6) {
      this.enemyShoot5()
    }

    if(this.time.now > shootTime7) {
      this.enemyShoot6()
    }

    if(this.time.now > shootTime8) {
      this.enemyShoot7()
    }

    if(this.time.now > shootTime9) {
      this.enemyShoot8()
    }

    if(this.time.now > shootTime10) {
      this.enemyShoot9()
    }

     },

    //  youDied : function() {
    //    lives -= 1
    //    if(lives === 0) {
    //      this.state.start("Level1")
    //    }
    //  },

     resetPlayer: function() {
       player.reset(100, 100)
     },

     collectTaco: function() {
       this.taco.kill()
     },

     nextLevel: function() {

       this.state.start("Level3")

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

     enemyShoot4: function() {
       if(enemy4.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy4.enemyMojito.x, enemy4.enemyMojito.y)

            bullet.body.velocity.x = -400

            shootTime5 = this.time.now + 2000
          }
          }
     },

     enemyShoot5: function() {
       if(enemy5.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy5.enemyMojito.x, enemy5.enemyMojito.y)

            bullet.body.velocity.x = -900

            shootTime6 = this.time.now + 2000
          }
          }
     },

     enemyShoot6: function() {
       if(enemy6.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy6.enemyMojito.x, enemy6.enemyMojito.y)

            bullet.body.velocity.x = -300

            shootTime7 = this.time.now + 2000
          }
          }
     },

     enemyShoot7: function() {
       if(enemy7.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy7.enemyMojito.x, enemy7.enemyMojito.y)

            bullet.body.velocity.y = -300

            shootTime8 = this.time.now + 2000
          }
          }
     },

     enemyShoot8: function() {
       if(enemy8.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy8.enemyMojito.x, enemy8.enemyMojito.y)

            bullet.body.velocity.x = -800

            shootTime9 = this.time.now + 2000
          }
          }
     },

     enemyShoot9: function() {
       if(enemy9.enemyMojito.alive){
         bullet = bullets2.getFirstExists(false)
          if(bullet) {
            bullet.reset(enemy9.enemyMojito.x, enemy9.enemyMojito.y)

            bullet.body.velocity.y = -300

            shootTime10 = this.time.now + 2000
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
