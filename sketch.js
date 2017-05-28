

var jugadorImg;
var y=0;
var bg;
var per;

function preload(){
  jugadorImg = loadImage("Imagen/jugador.png");
}




function setup(){

 bg = loadImage("Imagen/fondo.jpg")
  createCanvas(1152,548);



   per =new Jugador(51.375,72.5);

}




function draw(){
  background(0);

  //stroke(226,204,0);
  //line(0,y, width, y);
//  y++;
//  if(y > height){
//    y=0;
//  }




  per.show(jugadorImg);
}


function keyPressed(){
  if(keyCode == RIGHT_ARROW){
    per.move(0);
  }
  if(keyCode == DOWN_ARROW){
    per.move(1);
  }
  if(keyCode == LEFT_ARROW){
    per.move(2);
  }
  if(keyCode == UP_ARROW){
    per.move(3);
  }
}
