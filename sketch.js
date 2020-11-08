var fixedRect, movingRect;
var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObject1 = createSprite(200,200,10,10);
  gameObject2 = createSprite(300,200,10,10);
  gameObject3 = createSprite(400,200,10,10);
  gameObject4 = createSprite(500,200,10,10);
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  gameObject2.velocityX=2;
  gameObject3.velocityX=-2;

  bounceOff(gameObject2,gameObject3);
  
  if(isTouching(gameObject2,movingRect)){
    gameObject2.shapeColor="blue";
    movingRect.shapeColor="red";
  }  
  else{
    gameObject2.shapeColor="green";
    movingRect.shapeColor="pink";
  }
  
  drawSprites();
}

function isTouching(object1,object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2
    && object2.y - object1.y < object1.height/2 + object2.height/2
    && object1.y - object2.y < object1.height/2 + object2.height/2) 
    {
  //movingRect.shapeColor = "red";
  //fixedRect.shapeColor = "red";

  return true;
 }
else {
 // movingRect.shapeColor = "green";
 //fixedRect.shapeColor = "green";

  return false;
}
}
function bounceOff(object1,object2){
  if (object2.x - object1.x < object1.width/2 + object2.width/2
    && object1.x - object2.x < object1.width/2 + object2.width/2) {
  object2.velocityX = object2.velocityX * (-1);
  object1.velocityX = object1.velocityX * (-1);
}
if (object2.y - object1.y < object1.height/2 + object2.height/2
  && object1.y - object2.y < object1.height/2 + object2.height/2){
  object2.velocityY = object2.velocityY * (-1);
  object1.velocityY = object1.velocityY * (-1);
}
}