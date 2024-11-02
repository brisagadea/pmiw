
function izqarriba(x0,y0) { // función 1 
for (let c = 200; c>10; c-=20){
  stroke(carp)
  fill(255,c-90,c-10)
  rect(x0,y0,c,c);
for (let cx = 100; cx > 0; cx -= 20) {
      fill(255/cx, cx + 80, cx + 90);
      rect(x0, y0, cx, cx);
      if (cx === 20) {
        rect(500, 100, 1, 1);
}
  }
}
}

function izqabajo(x0,y1){
for (let c=200; c>10; c-=20) {
   stroke(carp1);
    fill(252, c - 70, c - 25);
    rect(x0, y1, c, c);
for (let cx = 100; cx > 0; cx -= 20) {
      fill(175, c + 155, c + 25);
      rect(x0, y1, cx, cx);
      if (cx === 20) {
        rect(500, 300, 1, 1);
}
    }
}
}

function derechaarriba (x1,y0) {
for (let c=200; c> 0; c-=20) {
  stroke(carp1);
  fill(255, c + 50, 2 / c + 50);
    rect(x1, y0, c, c);
for (let cx = 100; cx > 0; cx -= 20) {
    fill(225, c + 125, c + 180);
    rect(x1, y0, cx, cx);
      if (cx === 20) {
    rect(700, 100, 1, 1);
      }
    }
  }
}

function derechaabajo(x1, y1) {
  for (let c = 200; c > 0; c -= 20) {
      stroke(carp);
      fill(255, c - 20, c - 200);
      rect(x1, y1, c, c);
for (let cx = 100; cx > 0; cx -= 20) {
      fill(c + 155, c + 125, c + 155);
      rect(x1, y1, cx, cx);
      if (cx === 20) {
        rect(700, 300, 1, 1);
      }
    }
  }
}
