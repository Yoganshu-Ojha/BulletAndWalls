var bullet;
var wall;
var bulletspeed;
var bulletweight;
var thickness;

function setup() {
  createCanvas(1600, 400);

  bulletspeed = random(223,321);
  bulletweight = random(400, 1500);
  thickness = random(22,83)

  bullet = createSprite(50, 200, 100, 50);
  bullet.velocityX = bulletspeed;
  bullet.shapeColor = "White";

  wall = createSprite(1500, 200, thickness, height / 2);
  bullet.shapeColor = "Lavender";
}

function draw() {
  background("black");

  

  collision();

  drawSprites();
}

function collision() {
  if (wall.x - bullet.x < (bullet.width + wall.width) / 2) {
    bullet.velocityX = 0;
    var damage = (0.5 * bulletweight * bulletspeed * bulletspeed) / thickness*thickness*thickness;
    if (damage > 2597475973) {
      wall.shapeColor = color(255, 0, 0);
    }
    console.log(damage)
    if (damage < 2597475973) {
      wall.shapeColor = color(0,255, 0);
    }
  }
}
