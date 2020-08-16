class Box{
    constructor(x, y, width, height, angle) {
      
        var options={
          isStatic: false,
         restitution:1,
           friction:0,     
           density:0.8 
               
        
      }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255; 

        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        console.log(this.body.speed);
  if(this.body .speed <3){

  
  //box2.display();
  }
else {
  World . remove (world,this.body);
push ();

this.visiblity=this.visiblity-5;
tint (255,this.visiblity);
image (this.image,this.body.position.x,this.body.position.y,50,50);

pop ();

}


}
}
      

