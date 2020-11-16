var wall, thickness;

var bullet,speed,weight;



function setup() {
  createCanvas(800,400);
  speed=random(55,90)
  weight=random(400,1500)
  thickness=random(22,83)

  bullet=createSprite(50, 200, 50, 20);
  bullet.shapeColor="white"
  bullet.velocityX = speed;

  wall=createSprite(600,200, thickness, height/2);
  wall.shapeColor="white"


}

function draw() {
  background(0);  
  
  if(wall.x - bullet.x < bullet.width/2 +wall.width/2) {

   bullet.velocityX=0;
  }
  
  var dmg = 0.5 * weight * speed * speed/(thickness*thickness*thickness)

  if (dmg > 10){
  
    wall.shapeColor="red"


  }

  
  
  if (dmg < 10){
  
    wall.shapeColor="lime"
    

  }

  drawSprites();
}




