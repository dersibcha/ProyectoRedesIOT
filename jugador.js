function Jugador(x,y){
  this.x=x;
  this.y=y;
  this.frame =0;
  this.direction =0;

  this.show =function( jugadorImg ){
    image(jugadorImg,51.375*this.frame++,72.5*this.direction,51.375,72.5,this.x,this.y,51.375,72.5);
    this.frame = (this.frame === 7)?0:this.frame;
  }



  this.move = function (d){
    this.direction =d;
    if(this.direction ==0)
    {
      this.x +=51.375;
    }
    if(this.direction ==1)
    {
      this.y +=72.5;
    }
    if(this.direction ==2)
    {
      this.x -=51.375;
    }
    if(this.direction ==3)
    {
      this.y -=72.5;
    }
  }
}
