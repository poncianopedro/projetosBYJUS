var bola;
var box1;

function setup() {
  createCanvas(600, 400);
  
  box1 = new Box();
  bola = new Bola(50, 50, "azul", 10);
  console.log (bola.x);
}

function draw() {
  background(220);

  bola.rolar()
  box1.show();
  box1.set_w(30);
}

