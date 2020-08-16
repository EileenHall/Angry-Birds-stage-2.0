//create Ground class
class Ground {
    // create function constructor
    constructor(x, y, width, height) {
       // make the ground static
      var options = {
          isStatic:true
      }
      //create the grouund rectangle
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      //add the ground to world
      World.add(world, this.body);
    }
    //dispaly
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      //draw rectangle on screen
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  