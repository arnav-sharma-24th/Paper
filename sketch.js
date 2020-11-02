
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,dustbin1,dustbin2,dustbin3,trash,dustbinImg,paperImg;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
	//Create the Bodies Here.


    
	ground = new Ground(400,680,800,20);

	dustbin3 = new Dustbin(500,665,200,10);
	trash = new Trash(40,23,70);
	
}


function draw() {
	
  
  background(0);
  
  Engine.update(engine);
  
  dustbin3.display();
  ground.display();
  trash.display();
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	
	  Matter.Body.applyForce(trash.body,trash.body.position,{x:35,y:-108})
	
	}
	
	
	}

