class SlingShot{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.2,
            length: 150,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.sling = Constraint.create(options)
        World.add(world,this.sling)

    }
        display(){

           var pointA = this.sling.bodyA.position;
           var pointB = this.sling.bodyB.position;
             push()
             stroke("red")
             strokeWeight(5);
             line(pointA.x, pointA.y, pointB.x, pointB.y);
             pop()
        }
    }  