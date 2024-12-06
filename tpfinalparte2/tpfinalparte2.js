//https://www.youtube.com/watch?v=bMFsoSIrppg
//Ganem Anahi - Gadea Brisa comision 1
let objJuego;
let fondo;
let sonidoFondo;
let imglinternita, imgpuerta, imgpersona, imgcorazon;

  function preload() {
  fondo = new ImagenesFondo();
  fondo.cargaimagenes();
  sonidoFondo = loadSound ('data/sonidof.mp3');
  imglinternita = loadImage("data/linternita.png");
  imgpuerta = loadImage ("data/puerta.png");
  imgpersona = loadImage ("data/personita.png")
  imgcorazon = loadImage ("data/corazoncito.png");
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
