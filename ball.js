class Ball{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:1.0,
        friction:0    
    }
    
    this.body = Bodies.circle(x, y,20, options);
    World.add(world, this.body);
    }
    display(){
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,20,20)
    }
    
    }