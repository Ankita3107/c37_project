var drawing = [];
//var currentPath =[];
var button ;

var gameState = 0;
var playerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();

  createCanvas(500,500);
  var button = createButton('clear',100,10);
  button.position(205, 580);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  canvas = createCanvas(displayWidth - 20, displayHeight - 30);
  
  if(mouseIsPressed){
    fill(253, 209, 16);
  textSize(30);
   text("Wanna delete it, press Space",200,400);
    var point ={
      x:mouseX,
      y:mouseY
    } 
    drawing.push(point);
  }
 beginShape();
 stroke(0);
 strokeWeight(10);  
noFill();
for(i = 0; i < drawing.length;i++){
    vertex(drawing[i].x,drawing[i].y)
}
endShape();
if (keyIsDown(32)){

drawing = drawing[0];
}
}


