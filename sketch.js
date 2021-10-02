const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
var engine,world



var snowfall=[]
var maxsnow=50;

function preload(){
   backgroundImg = loadImage("snow3.jpg")
}


function setup() {
  createCanvas(1600,800);
  engine=Engine.create()
  world=engine.world
  if (frameCount%300===0){
    for (i=0;i<maxsnow;i++){
      snowfall.push(new Snow(random(0,1600),random(0,700)))
    }
  
  }
}

function draw() {
  background(backgroundImg);
  Engine.update(engine)
  for(var i=0;i<maxsnow;i=i+3){
    snowfall[i].display()
    snowfall[i].updateY();
  }  
  drawSprites();
}