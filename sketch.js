var bullet,wall,thickness;
var speed,weight;
var damage;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);

  bullet = createSprite(50,200,50,30);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80);
  
  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(0);  


  if (hasCollided(bullet,wall)){

    damage = 0.5*weight*speed*speed/thickness^3;
    
      bullet.velocityX = 0;

      if (damage<10){
        wall.shapeColor = color(0,255,0);
      }
      else{
        wall.shapeColor = color(255,0,0);
      }

  }
  drawSprites();
}
function hasCollided(lbullet,lwall){
    bulletRightEdge = bullet.x+bullet.width;
    wallLeftEdge = wall.x;

    if (bulletRightEdge>=wallLeftEdge){
      return  true;
    }
    return false;
}