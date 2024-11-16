//comisión 1. Anahí Ganem y Brisa Gadea 
//video: https://youtu.be/XQVbOLt7DHs
let objJuego;
let fondo;
let sonidoFondo;
let vidas = 3;

  function preload() {
  fondo = new ImagenesFondo();
  fondo.cargaimagenes();
  sonidoFondo = loadSound ('data/sonidof.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(3,5); //3 obstaculos 5 linter
}


function draw() {
  background(0);
  objJuego.dibujar();
}
function keyPressed() {
  objJuego.teclasMovimiento(keyCode);
  objJuego.comenzarJuego(keyCode);
}
function mousePressed() {
  objJuego.mouseclic();
  objJuego.manejosonido();

}
