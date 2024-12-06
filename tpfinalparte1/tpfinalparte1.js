//https://youtu.be/yJY3qkP3j0k
//comisión 1 Brisa Gadea y Anahí Ganem
let imagen = [];
let orden;
let textos= [];
let desarrollo;
let sonidoFondo;

function preload() {

  for (let i=0; i<14; i++) {
    imagen [i] = loadImage("data/casa" + i + ".jpg");
  }
  sonidoFondo = loadSound('data/musiquita.mp3');
}

function setup() {
  createCanvas(640, 480);
  textSize(15);
  textAlign(CENTER, CENTER);
  textos = loadStrings("data/textos.txt"); //archivo d texto

  for (let i=0; i<14; i++) {
    imagen[i].resize (640, 480); // dibuja las imageness
  }

  orden = 0;
  desarrollo = "comienzo";
}
function draw() {

  background(0);
  let valorVolumen = map(mouseX, 0, width, 0.1, 1);
  sonidoFondo.amp(valorVolumen);

  if (desarrollo === "comienzo") {
    cambiaimagen(imagen[0], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
    ordenTexto(0); //Primera linea de texto
    fill(255);
    text("Comenzar", 320, 420); //texto de los botones
    textSize(20);
  } else if (desarrollo === "primera") {
    cambiaimagen(imagen[1], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
    ordenTexto(1); //Segunda linea de texto
    fill(255);
    text("siguiente", 320, 420);
    textSize(20);
  } else if (desarrollo === "segunda") {
    cambiaimagen(imagen[2], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
    ordenTexto(2); //decision baño/cocina
    fill(255);
    text("Ir al baño", 100, 420);
    text("Ir a la cocina", 540, 420);
    textSize(20);
  } else if (desarrollo === "tercera") {
    cambiaimagen(imagen[3], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
    ordenTexto(3); // estan en el baño
    fill(255);
    text("siguiente", 540, 420);
    textSize(20);
  } else if (desarrollo === "cuarta") {
    cambiaimagen(imagen[4], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
    ordenTexto(4);
    fill(255);
    text("siguiente", 540, 420);
    textSize(20);
  } else if (desarrollo === "quinta") {
    cambiaimagen(imagen[5], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
    ordenTexto(6); //siguen el camino d la cocina
    fill(255);
    text("siguiente", 540, 420);
    textSize(20);
  } else if (desarrollo === "sexta") {
    cambiaimagen(imagen[6], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
    ordenTexto(9); // ¿abandonar la casa?
    fill(255);
    text("siguiente", 540, 420);
    textSize(20);
  } else if (desarrollo === "septima") {
    cambiaimagen(imagen[7], 0, 0, 480, 480);
    botond(100, 420, 150, 60);               // ACA LE PUSE UN BOTON PARA VOLVER. NO SÉ SI QUERES QUE LO DEJE O LO SACAMOS
    botond (540, 420, 150, 60);
    ordenTexto(10);
    fill(255);
    text("Abandonar", 100, 420); //camino de la cocina a los finales
    text("Seguir", 540, 420);
    textSize(20);
  } else if (desarrollo === "octava") {
    cambiaimagen(imagen[8], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
    ordenTexto(9);
    fill(255);
    text("Inicio", 100, 420);
    text("Irse", 540, 420);
    textSize(20);
  } else if (desarrollo === "novena") {
    cambiaimagen(imagen[9], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond(540, 420, 150, 60);
    ordenTexto(6);
    fill(255);
    text("abandonar", 100, 420);
    text("seguir", 540, 420);
    textSize(20);
  } else if (desarrollo === "decima") {    // final
    cambiaimagen(imagen[10], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
    ordenTexto(8);// final UNO
    fill(255);
    text("Inicio", 320, 420);
    textSize(20);
  } else if (desarrollo === "undecima") {
    cambiaimagen(imagen[11], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
    ordenTexto(7);
    fill(255);
    text("Confrontar", 100, 420);
    text("Investigar", 540, 420);
    textSize(20);
  } else if (desarrollo === "duodecima") {  //final
    cambiaimagen(imagen[12], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
    ordenTexto(11);
    fill(255);
    text("Inicio", 320, 420);
    textSize(20);
  } else if (desarrollo === "decimotercera") { //imagen final alt
    cambiaimagen(imagen[13], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
    ordenTexto(12);
    fill(255);
    text("Inicio", 320, 420);
    textSize(20);
  }
}

function ordenTexto (linea) {
  fill(255); // color del texto
  if (orden < textos.length) {
    text(textos [linea], width/2, height/2); //centrar
  }
}

function  mousePressed() {
  if (botonp("comienzo", "primera", 320)) {
  } else if (botonp("primera", "segunda", 320)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("segunda", "tercera", 100)) { //continuar
    orden = (orden + 1) % textos.length;
  } else if (botonp("segunda", "cuarta", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("tercera", "sexta", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("cuarta", "quinta", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("sexta", "septima", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("quinta", "octava", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("octava", "comienzo", 100)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("octava", "decima", 540)) {  //maletas
    orden = (orden + 1) % textos.length;
  } else if (botonp( "septima", "octava", 100)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp( "septima", "novena",540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("decima", "comienzo", 320)) { //FINAL 1
    orden = (orden + 1) % textos.length;  //aca tengo dudas del texto
  } else if (botonp("novena", "octava", 100)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("novena", "undecima", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("undecima", "duodecima", 100)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("undecima", "decimotercera", 540)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("duodecima", "comienzo", 320)) {
    orden = (orden + 1) % textos.length;
  } else if (botonp("decimotercera", "comienzo", 320)) {
    orden = (orden + 1) % textos.length;
  }

  if (bot(50, 50, 100, 50)) {

    tic.play();
  }
  if (!sonidoFondo.isPlaying()) {
    sonidoFondo.loop(true);
  }
  // pongo loop para que se repita mientras pongas comenzar
}
function bot(x, y, an, al) {
  return mouseX>x && mouseX <x+an && mouseY>y && mouseY<y+al;
}

function botond(px, py, anch, alt) {
  if (mousesobre(px, py, anch, alt)) {
    fill (81, 87, 242);
  } else {
    fill (103, 101, 101);
  }
  ellipse (px, py, anch, alt);
}

function botonp (x, y, p) {
  if (desarrollo === x && mousesobre (p, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}


function mousesobre(x, y, radio) {
  let d = dist(mouseX, mouseY, x, y);
  return d < radio / 2;
}

function cambiaimagen (img, x, y, anch, alt) {
  imageMode(CENTER);
  image(img, width/2, height/2, anch, alt);
}
