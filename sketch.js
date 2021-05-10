const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var bg;
var ground;
var boggie1,boggie2,boggie3;
var chain1;
var trainSound 
var crashSound
var flag = 0;

function preload(){
  bg= loadImage("images/bg.jpg");
  trainSound = loadSound("sound/train.mp3");
  crashSound = loadSound("sound/train_crossing.mp3");
}
function setup() {
  createCanvas(1200,400);
  myEngine = Engine.create();
  myWorld= myEngine.world;

  ground = new Ground(600,380,1200,20);
 boggi1 = new Boggi(50,370,50,50)
 boggi2 = new Boggi(150,370,50,50)
 boggi3= new Boggi(250,370,50,50)
 boggi4 = new Boggi(350,370,50,50)
 boggi5 = new Boggi(450,370,50,50)
 boggi6 = new Boggi(550,370,50,50)
 

 chain1 = new Chain(boggi1.body,boggi2.body)
 chain2 = new Chain(boggi2.body,boggi3.body)
 chain3 = new Chain(boggi3.body,boggi4.body)
 chain4 = new Chain(boggi4.body,boggi5.body)
 chain5 = new Chain(boggi5.body,boggi6.body)

 rock1 = new Rock(1100,340,100,100)

}

function draw() {
  background(bg);  
  Engine.update(myEngine);
  boggi1.show();
  boggi2.show();
  boggi3.show();
  boggi4.show();
  boggi5.show();
  boggi6.show();
  
chain1.show();
chain2.show();
chain3.show();
chain4.show();
chain5.show();

rock1.show();

 
  }

  
