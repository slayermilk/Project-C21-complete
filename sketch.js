const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Body = Matter.Body; 

function preload() 
{
    
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	var ball_options = {
		restitution: 0.80,
		density: 1.2
	}

	//Create the Bodies Here.

	ball = Bodies.circle(50, 350, 25, ball_options);
	World.add(world, ball);

	
    ground1 = new ground(400,700,800,50);

	wall1 = new wall(600,650,10,60)
	wall2 = new wall(450,650,10,60)

	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  ellipse(ball.position.x, ball.position.y, 30);
  
  
  ground1.show()
  wall1.show()
  wall2.show()
  
/*  if(keyIsDown(RIGHT_ARROW)) {
	horizontalForce()
  }

  if(keyIsDown(LEFT_ARROW)) {
	verticalForce()
  }*/

 
}


function horizontalForce(){

	Matter.Body.applyForce(ball,{x:0, y:0}, {x:0.05, y:0})
  
}
  
  function verticalForce(){
  
	Matter.Body.applyForce(ball, {x:0,y:0}, {x:0, y:-0.05})
  
}

function keyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

	}

}