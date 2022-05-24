var bola = {
  cor: "Blue",
  x: 100,
  y: 200,
  tamanho: 15,
  velocidadeX: 0.4,
  velocidadeY: 0.6
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(bola.x,bola.y,bola.tamanho);
  fill(bola.cor);
  bola.x += bola.velocidadeX
}