let obstaculos = [];
let linternas = [];
let personaje;
let vidas = 3;
let juego;

function preload() {
  textos = loadStrings("data/textos.txt"); // Asegúrate de que el archivo exista
}

function setup() {
  createCanvas(640,480);
  juego = new Juego(5, 3); // 5 obstáculos, 3 linternas inicialmente
}

function draw() {
  juego.dibujar();
}

function keyPressed() {
  juego.teclasMovimiento(keyCode);
  juego.comenzarJuego(keyCode);
}

function mousePressed() {
  juego.mouseClic();
}
