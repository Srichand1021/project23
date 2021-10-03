class bob{
    constructor(x,y,r){
        var options = {
            restitution : 1,
            friction : 0,
            density : 0.8,
            isStatic : false
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options)
        World.add(world,this.body)
    }
    display()
	{
			var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            strokeWeight(2);

            line (pointA.x,pointA.y,pointB.x+this.offsetX,pointB.PI)

            
	}
}