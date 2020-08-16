//create box class
class Log {
    //create function constructor
    constructor(x, y,height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.5,
          'density':1.0
      }
      //create boxes
      this.body = Bodies.rectangle(x, y, 20, height, options);
      this.width = 20;
      this.height = height;
      Matter.Body.setAngle(this.body,angle);
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
      fill("white");
      rect(0,0,this.width, this.height);
      pop();
    }
  };
  