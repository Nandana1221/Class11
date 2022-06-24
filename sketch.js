
var trex ,trex_running;
var ground,groundimage;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
groundimage = loadImage("ground1.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(300,130,20,20);
 trex.addAnimation("running",trex_running);
 trex.x = 50;
 trex.scale = 0.8;
 ground = createSprite(200,180,400,20)
}

function draw(){
  background("white")
  if(keyDown("space")){
    trex.velocityY = -8;
  }
  trex.velocityY = trex.velocityY +0.5
  trex.collide(ground);
drawSprites();

}
