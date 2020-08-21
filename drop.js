class Drop{
    constructor(x,y){
        var options={
        isStatic:false,
        friction:0.1,
        restitution:0.05
        }
    this.x=x;
    this.y=y;
    this.r=10;
    this.body=Bodies.circle(this.x,this.y,this.r,options);
    World.add(world,this.body);
    }
  

display(){
    var pos=this.body.position;
    push()
    translate(pos.x,pos.y);
    fill("blue");
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
}
update(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
}
}