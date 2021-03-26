var background1,background_1;
var gun,gu_n;
var bullet,bull_et;
var balloon, ball_oon, balloonsGroup;

function preload() {
  background_1=loadImage("bg.jpg");
  gu_n=loadImage("gun2.png");
  bull_et=loadImage("bullet2.png");
  ball_oon=loadImage("balloon.png")
}

function setup() {
  createCanvas(600, 600);

  background1 = createSprite(0, 150, 1200, 1200);
  background1.addImage(background_1);
  background1.scale = 2;
  

  gun = createSprite(550, 300, 50, 20);
  gun.addImage(gu_n);
  gun.scale = 0.1 

  balloonsGroup=new Group();
}

function draw() 
{
background("cyan");

  gun.y = mouseY;

  if (keyDown("space")) 
  {
    shootbullet();
  }

  spawnBalloons();

  //drawSprites
  drawSprites();
}

//shoot Arrow
function shootbullet() {
  bullet = createSprite(gun.x, gun.y, 50, 20);
  bullet.addImage(bull_et);
  bullet.y = gun.y
  bullet.scale = 0.1;
  bullet.velocityX = -20;
}

//spawn Balloons
function spawnBalloons(){
  if (frameCount % 60 === 0) {
    var balloon = createSprite(50,120,40,10);
    balloon.y = Math.round(random(80,620));
    balloon.addImage(ball_oon);
    balloon.scale = 0.1;
    
    //add each balloon to the group
    balloonsGroup.add(balloon);
  }
}