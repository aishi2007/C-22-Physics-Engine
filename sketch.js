const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box ;

var engine, world;

var ground;

var ball;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400, 380, 800, 20, options);
  World.add(world, ground);

  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  var ball_options= {
    restitution:1.5
  }
  ball=Bodies.circle(200,100,20, ball_options );
  World.add(world, ball);
}

function draw() {
  background("black");  
  Engine.update(engine);

  rectMode(CENTER);
  fill("green");
  
  rect(ground.position.x, ground.position.y, 800, 20);
  
  fill("white");
  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y,20,20);

  drawSprites();
}