var box;
var cachorro;

function setup() 
{
  createCanvas(400, 400);

  box = new Box(50,100,50,50,20);
  cachorro = new Cachorro(60,"golden","laranja","carinhoso");
}

function draw() 
{
  background(220);

  box.show();
  box.moveUp(10);
}

