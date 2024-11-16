let objJuego;
let fondo; 
let sonidoFondo;
let personaje;
let vidas= 3;

function preload() {
   fondo = new ImagenesFondo();
   fondo.cargaimagenes();
   sonidoFondo = loadSound ('data/sonidof.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(3,5); //tres obstaculos 5 linternas
}


function draw() {
  background(0);
  objJuego.dibujar();
  
}
function keyPressed(){
  objJuego.teclasMovimiento(keyCode);
  objJuego.comenzarjuego(keyCode);
}
function mousePressed() {
  objJuego.mouseclic();
  objJuego.manejosonido();
}
