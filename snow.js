class Snow{
    constructor(x,y){
        var options={isStatic:false,restitution:0.1}
        this.body=Bodies.rectangle(x,y,50,50,options)
        this.image1=loadImage("snow4.webp")
        this.image2=loadImage("snow5.webp")
        this.width=50
        this.height=50
        World.add(world,this.body)
    }
updateY(){
    if(this.body.position.y>height){
        Matter.Body.setPosition(this.body,{x:random(0,1600),y:random(0,700)})
    }

}
display(){
    imageMode(CENTER)
    image(this.image1,this.body.position.x,this.body.position.y,this.width,this.height)
    image(this.image2,this.body.position.x+80,this.body.position.y-50,this.width,this.height)
}
}