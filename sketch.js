//Tower Siege-3 Project 33
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground,polygon,box1,box2,box3,box4,box5,box6,box7;
var striker,shot;
var engine,world;
var score = 0;
var backgroundImg;
var bg = "bg1-light.jpg";

function preload() {
    
    getBackgroundImg();
}

function setup(){
   
   
  
 createCanvas(1300,600);

 engine = Engine.create();
 world = engine.world;

 

ground = new Ground(630,590,1330,20);

stand1 = new Ground(840,565,350,30);

//stage 1
box1 = new Box(840,535,30,30);

box2 = new Box(810,535,30,30);
box3 = new Box(780,535,30,30);
box4 = new Box(750,535,30,30);

box5 = new Box(870,535,30,30);
box6 = new Box(900,535,30,30);
box7 = new Box(930,535,30,30);

//stage2
box8 = new Box(840,505,30,30);

box9 = new Box(810,505,30,30);
box10 = new Box(780,505,30,30);

box11 = new Box(870,505,30,30);
box12 = new Box(900,505,30,30);

//stage3
box13 = new Box(840,475,30,30);

box14 = new Box(810,475,30,30);
box15 = new Box(870,475,30,30);

box16 = new Box(840,445,30,30);

//stand2
stand2 = new Ground(1090,350,200,20);

//stage1
box17 = new Box(1090,330,20,20);

box18= new Box(1070,330,20,20);
box19 = new Box(1050,330,20,20);

box20 = new Box(1110,330,20,20);
box21 = new Box(1130,330,20,20);

//stage2
box22 = new Box(1090,310,20,20);

box23 = new Box(1070,310,20,20);
box24 = new Box(1110,310,20,20);

box25 = new Box(1090,290,20,20)

striker = new Poly(400,400,50,50);
shot = new Shot(striker.body,{x:300,y:300});

}

function draw(){

       
    if(backgroundImg){

        background(backgroundImg);
    }
     
    text("Score  : " + score , 50,50)
    
    Engine.update(engine);
    
    rectMode(CENTER);

    ground.display();

    strokeWeight(2);
    fill("blue"); 
    stand1.display();

    strokeWeight(2);
    fill("magenta"); 
    box1.display();
    box1.score();
    box2.display();
    box2.score();
    box3.display();
    box3.score()
    box4.display();
    box4.score()
    box5.display();
    box5.score()
    box6.display();
    box6.score();
    box7.display();
    box7.score()

    
    strokeWeight(2);
    fill("grey"); 
    box8.display();
    box8.score();
    box9.display();
    box9.score();
    box10.display();
    box10.score();
    box11.display();
    box11.score();
    box12.display();
    box12.score();

    strokeWeight(2);
    fill("lightgreen"); 
    box13.display();
    box13.score();
    box14.display();
    box14.score();
    box15.display();
    box15.score();

    strokeWeight(2);
    fill("yellow"); 
    box16.display();
    box16.score();

    strokeWeight(2);
    fill("orange"); 
    stand2.display();

    strokeWeight(2);
    fill("skyblue"); 
    box17.display();
    box17.score();
    box18.display();
    box18.score();
    box19.display();
    box19.score();
    box20.display();
    box20.score();
    box21.display();
    box21.score();

    strokeWeight(2);
    fill("green"); 
    box22.display();
    box22.score();
    box23.display();
    box23.score();
    box24.display();
    box24.score();

    strokeWeight(2);
    fill("red"); 
    box25.display();
    box25.score();
    
    striker.display();
    shot.display();

}

function mouseDragged(){
      
    Matter.Body.setPosition(striker.body,{x:mouseX,y:mouseY});
       
}

function mouseReleased(){

    shot.fly();

}

function keyPressed(){

    if(keyCode === 32){
        
        shot.attach(striker.body);
        
}
}


async function getBackgroundImg(){

    //https://worldclockapi.com/api/json/est/now
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    console.log(hour);
    
    if(hour >= 6 && hour <= 11){ 
        bg = "bg1-light.jpg";
    }
    else{
        console.log(">13");
        bg = "bg2-dark.jpg";
    }

    backgroundImg = loadImage(bg);
}




