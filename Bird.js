//create box class
class Bird {
    //create function constructor
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      //create boxes
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      
      //add boxes to world
      World.add(world, this.body);
    }
    //display
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate (pos.x,pos.y);
      rotate (angle);
      rectMode(CENTER);
      //draw boxes on the screen
      fill("yellow");
      rect(0,0,this.width, this.height);
      pop();
    }
  };
  