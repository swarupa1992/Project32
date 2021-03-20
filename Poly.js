class Poly {
   

        constructor(x,y,w,h){
     
            var options = {
     
             isStatic:false,
             restitution : 1,
             friction : 0.8,
             density : 1 
            }
            this.width = w;
            this.height = h;
            this.body = Bodies.rectangle(x,y,w,h,options);
            World.add(world,this.body);
            this.image = loadImage("polygon.png");
     
         }
     
         display(){
             
             
             var  pos = this.body.position;
             
             imageMode(CENTER);
             image(this.image,pos.x,pos.y,this.width,this.height); 
         }
     }
