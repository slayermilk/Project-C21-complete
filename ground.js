class ground
{
  constructor(x,y,w,h)
 {
    let options = {
      isStatic: true
    }

    this.body = Bodies.rectangle(x,y,w,h,options)

    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    
    World.add(world,this.body)
  }

  show() {
    var pos = this.body.position;
    push()
    rectMode(CENTER)
    rect(pos.x, pos.y, this.width, this.height);
    pop()
  }
  
  
    

}