class Dustbin{
    constructor(x,y,width,height){
        var option={
            isStatic:true
        }
        //this.image=loadImage("dustbin.png");
        this.body=Bodies.rectangle(x,y,width,height,option);
       
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        fill(255);
        strokeWeight(0);
        var pos=this.body.position;
    imageMode(CENTER);
        //image(this.image,pos.x,pos.y,200,250);
        rect(pos.x,pos.y,this.width,this.height);
    }
}