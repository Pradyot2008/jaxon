var road
var jaxon

function preload(){
 //pre-load images
 jaxon_running = loadAnimation("Runner-1.png","Runner-2.png")
 roadImage = loadImage("path.png")
}

function setup(){
 createCanvas(400,400);
   //create sprites here
  road = createSprite(200,200);  
  road.addImage(roadImage)
  road.velocityY = 4;
  road.scale = 1.20

  jaxon = createSprite(200,350,400,200);  
  jaxon.addAnimation("running", jaxon_running)
  jaxon.scale = 0.06

}

function draw() {
 background("blue");
 if(road.y > 400){
   road.y = road.height/2
 }
 drawSprites();
}

