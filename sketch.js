const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ball,ball1, ground;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    ball = new Box(200,200,50,50)
    ball1 = new Box(240,100,50,80)
    ground = new Ground(200,390,400,20)

}

function draw(){
    background("black")
    Engine.update(engine);
    ball.display();
    ball1.display();
    ground.display();

}