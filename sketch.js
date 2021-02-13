const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

function preload(){
  }

function setup() {
	createCanvas(1300, 800);
	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

}

function draw() {
Engine.update(engine)
  background("lightblue");

}




function mouseDragged(){

	}







			