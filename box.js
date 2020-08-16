//create box class
class Box {
  //create function constructor
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    //create boxes
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    //add boxes to world
    World.add(world, this.body);
  }
  //display
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate (pos.x,pos.y);
    rotate (angle);
    rectMode(CENTER);
    //draw boxes on the screen
    strokeWeight(4);
    stroke("green");
    fill("red");
    rect(0,0,this.width, this.height);
    pop();
  }
};
