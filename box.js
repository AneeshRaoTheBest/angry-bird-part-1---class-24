class Box{

    constructor(x,y,width,height){

        var box_option={

            restitution:0.8,
            friction:0.4,
            density:1.4
        }

        this.body=Bodies.rectangle(x,y,width,height,box_option);
        World.add(world,this.body);
        this.width=width;
        this.height=height;
        console.log(this.body.angle)
    }

    display(){

        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
    
        strokeWeight(4)
        stroke("brown")
        fill("white")
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
    
        }
}