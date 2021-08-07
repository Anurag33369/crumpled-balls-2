var ball
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
function preload() {
	dustbinimg = loadImage("dustbingreen.png")
	paperimg = loadImage("paper.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	var opt = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}
ball = Bodies.circle(300,100,20,opt)
World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  imageMode(CENTER);
  background("blue");
 

  groundObject.display();
  dustbinObj.display();
image(paperimg,ball.position.x,ball.position.y,20,20)
image(dustbinimg,1205,550,235,235)
}
function keyPressed() {
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:70,y:-80}) 
	}
}
