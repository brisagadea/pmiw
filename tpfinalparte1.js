//comisión 1 Brisa Gadea y Anahí Ganem
//Video: https://www.youtube.com/watch?v=yJY3qkP3j0k 
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
  if (botoniniciovolver("comienzo", "primera")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("primera", "segunda")) {
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda("segunda", "tercera")) { //continuar
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("segunda", "cuarta")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("tercera", "sexta")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("cuarta", "quinta")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("sexta", "septima")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("quinta", "octava")) {
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda("octava", "comienzo")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("octava", "decima")) {  //maletas
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda( "septima", "octava")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha( "septima", "novena")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("decima", "comienzo")) { //FINAL 1
    orden = (orden + 1) % textos.length;  //aca tengo dudas del texto
  } else if (botonizquierda("novena", "octava")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("novena", "undecima")) {
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda("undecima", "duodecima")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("undecima", "decimotercera")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("duodecima", "comienzo")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("decimotercera", "comienzo")) {
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

function botoniniciovolver (x, y) {
  if (desarrollo === x && mousesobre (320, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}


function botonizquierda (x, y) {
  if (desarrollo === x && mousesobre (100, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}

function botonderecha (x, y) {
  if (desarrollo === x && mousesobre(540, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}

function mousesobre(x, y, anch, alt) {
  return mouseX > x && mouseX < x+anch && mouseY > y && mouseY < y+alt;
}

function cambiaimagen (img, x, y, anch, alt) {
  imageMode(CENTER);
  image(img, width/2, height/2, anch, alt);
}
