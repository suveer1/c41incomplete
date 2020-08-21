const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var drops=[];
var maxdrops=100

function preload(){
    
}

function setup(){
    createCanvas(500,500);
    engine = Engine.create();
    world = engine.world; 
    dro=new Drop(200,200);
    for(var i=0;i<maxdrops;i++){
        drops.push(new Drop(random(0,400)),i);
    }
    
}

function draw(){
    background("black");
   /* for(var i=0;i<drops.length;i++){
        drops[i].display();

    }*/
    dro.display();
}   

