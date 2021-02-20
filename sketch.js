const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: false,
        restitution : 1
    }

var ground_options ={
isStatic: true

}


   object= Bodies.rectangle(200,200,50,50,object_options);
    World.add(world,object);

   ground = Bodies.rectangle(200,390,400,20,ground_options);
   World.add(world,ground);


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50); 
    rect(ground.position.x,ground.position.y,400,20)
    
}
