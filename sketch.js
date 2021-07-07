const Constraint=Matter.Constraint
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    roof=new Roof(300,50,300,20)
	bob5=new Bob(200,300,40)
	bob1=new Bob(250,300,40)
	bob3=new Bob(300,300,40)
	bob2=new Bob(350,300,40)
	bob4=new Bob(400,300,40)
	rope1=new Rope(bob1.body,roof.body,0)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("Black");
  roof.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
  rope1.display()
  drawSprites();
 
}



