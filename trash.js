class Trash{
constructor(x,y,radius){
var option={
isStatic:false,
'restitution':0.3,
'friction':0.5,
'density':0.4

}
this.radius=radius;
this.x=x;
this.y=y;
this.body=Bodies.circle(x,y,radius/2,option);
this.image = loadImage("paper.png");

World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    
push();
    translate(pos.x,pos.y);
   
    rectMode(CENTER);
    fill(255);
    ellipse(0, 0, this.radius,this.radius);
    pop();
  }

}

