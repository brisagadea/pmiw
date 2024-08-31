
 let foto; 
 function preload() {
   foto= loadImage("data/F_12.jpg");

let carp; 
let carp1;
let x0;
let x1;
let y0;
let y1;
let aleatorio;
let river;
let izqarriba;
let izqabajo;
let derechaarriba;
let derechaabajo;

var r;
var g;
var b;
var cantrarandom;
 var x;
 var y;
var cantra;
var par;

function setup() {
  createCanvas(800,400);
  
  rectMode(CENTER);
  strokeWeight(5);
  stroke(240, 72, 39);
  x0=500;
  x1=700;
  y0=100;
  y1=300;
  carp=color (240, 72, 39);
  carp1=color(244, 55, 17);

}


function draw() {
background(255,5,5);

  izqarriba(500,100);
  izqabajo(500,300);
  derechaarriba(700,100);
   derechaabajo(700,300);
}

function keyIsPressed() {
  if (key=='g') {
    r=random(0, 255);
    i=random(0, 255);
    v=random(0, 255);
     carp=color(r, i, v);
    carp1=color(r,i,v);
  }
  if (key=='f') {
    carp=color(240, 72, 39);
    carp1=color(244, 55, 17);
  }
}

 
 
}
