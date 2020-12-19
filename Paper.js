class Paper{
    constructor(){
        var option={
            restituion:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("paper.png");
        this.body=Bodies.circle(100,200,22,option);
        
        
        World.add(world,this.body);
    }
    display(){
        
        //circle(this.body.position.x,this.body.position.y,30);
        //push();
        //translate(this.body.position.x,this.body.position.y);
        //angleMode(RADIANS);
       //imageMode(CENTER);
  
        image(this.image,this.body.position.x,this.body.position.y,60,60);
        //pop();
    }
}