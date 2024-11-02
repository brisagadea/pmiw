
// Gadea Brisa, comisión 1 
// Video: https://youtu.be/ji9AufCVZPc


let imagen;
let carp, carp1, x0,y0,x1,y1;
let r,i,v;

function preload() {
imagen = loadImage ('data/cuadradito.jpg');

}

function setup() {
createCanvas (800,400);
rectMode(CENTER);
strokeWeight(5);
stroke(240,72,39);

x0=500;
x1=700;
y0=100;
y1=300;
carp= color(240,72,39);
carp1= color(244,55,17);

}


function draw() {
  background(255,5,5);
image(imagen,0,0,400,400);

izqarriba(500,100);
izqabajo(500,300);
derechaarriba(700,100);
derechaabajo(700,300);

}

function keyPressed() {
if (key=== 'g') {
  carp=colorcito(r,i,v);
  carp1=colorcito(r,i,v);
}
if (key === 'f') {
    carp = color(240, 72, 39);
    carp1 = color(244, 55, 17);
}
}


function colorcito () { //función que retorna valor
  let r= random(0, 255);
  let g= random(0, 255);
  let b= random(0, 255);
return color(r, g, b);
}
