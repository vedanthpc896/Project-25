class Ground {

    constructor(x,y,width,height) {

    var options={

    isStatic:true
     
    }
    this.image = loadImage("Dustbin.png")
this.body = Bodies.rectangle(x,y,width,height,options)
this.width= width;
this.height= height;
World.add(world,this.body);
}

display() {
var pos= this.body.position;
push()
translate(pos.x,pos.y);
fill('brown')
rectMode(CENTER);
image(this.image,0,this.width,this.height);
pop();

}

}