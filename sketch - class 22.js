const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object;
var ground,ball;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  var object_options={isStatic:true}
  object=Bodies.rectangle(400,200,50,50,object_options);
  World.add(world,object);
  console.log(object);

  var ground_options={isStatic:true}
  ground=Bodies.rectangle(400,380,800,20,ground_options);
  World.add(world,ground);

  var ball_options={restitution:1}
  ball=Bodies.circle(600,80,50,ball_options);
  World.add(world,ball);
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,50,50);

  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
}