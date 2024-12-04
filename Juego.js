class Juego {
  constructor(cantidadObstaculos,cantidadLinternas) {
    this.cantidadObstaculos = cantidadObstaculos;
    this.cantidadLinternas = cantidadLinternas;
    this.estado = 0;
    this.linternasRecolectadas = 0;
    this.crearPersonaje();
    this.crearObstaculos();
    this.crearLinternas();
    this.textos = [];
    this.textos = loadStrings("data/textos.txt");
  }

  dibujar() {
    
    let valorVolumen = map(mouseX, 0, width, 0.1, 1);
    sonidoFondo.amp(valorVolumen);
    
    if (this.estado === 0) {
      // Pantalla de inicio
      fondo.dibujar();
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      text(this.textos[0], width / 2, height / 2 - 100);
      fill(200, 0, 0);// Botón "instrucciones"
      this.boton (width / 2 - 70, height /2);
      fill(255);
      textSize(20);
      text(this.textos[1], width / 2, height / 2 + 20);
    } else if (this.estado === 1) {
      // instrucciones y reglas
      fondo.dibujar();
      textSize(16);
      fill(255);
      let y = height / 2 - 130;
      for (let i = 2; i < this.textos.length -9; i++) { //funcion para crear parrfo
        text(this.textos[i], width / 2, y);
        y += 18; // interlineado
      }
    
    } else if (this.estado === 2) {
      // Pantalla del juego
      background(220);
      this.personaje.mostrar();
      this.personaje.mover();

for (let i = 0; i < this.obstaculos.length; i++) {
  let obstaculo = this.obstaculos[i];
  obstaculo.mostrar();
  obstaculo.mover();
  if (obstaculo.colisionaCon(this.personaje)) {
    vidas--;
    obstaculo.resetear();
    if (vidas <= 0) {
      this.estado = 4; // Perdiste
    }
  }
}

        
for (let i = 0; i < this.linternas.length; i++) {
  let linterna = this.linternas[i];
  if (!linterna.recolectada) {
    linterna.mostrar();
    linterna.mover();
    if (linterna.colisionaCon(this.personaje)) {
      linterna.recolectada = true;
      this.linternasRecolectadas++;
      if (this.linternasRecolectadas >= 5) {
        this.estado = 3; // Ganaste
      }
    }
  }
}


   // Mostrar vidas
    for (let i = 0; i < vidas; i++) {
      fill(255, 0, 0); // Color rojo para representar vidas
      ellipse(30 + i * 20, 30, 15, 15); // Dibujar círculos para vidas
    }

    // Mostrar linternas recolectadas
    for (let i = 0; i < this.linternasRecolectadas; i++) {
      fill(255, 223, 0); // Color amarillo para las linternas
      rect(30 + i * 20, 50, 10, 20); // Dibujar rectángulos para linternas recolectadas
    }


    } else if (this.estado === 3) {
      // Pantalla de victoria
      background(0, 255, 0);
      textAlign(CENTER, CENTER);
      textSize(18);
      fill(0);
      let y = height / 2 - 100;
      for (let i = 16; i < this.textos.length -4; i++) { //funcion para crear parrfo
        text(this.textos[i], width / 2, y);
        y += 40; // interlineado
      }
      fill(0);
      this.boton (width / 2 - 70, height /2);
      fill (255);
      textSize(20);
      text(this.textos[22], width / 2, height / 2 + 20);
    } else if (this.estado === 4) {
      // Pantalla de derrota
      background(255, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(25);
      fill(0);
      let y = height / 2 - 100;
      for (let i = 19; i < this.textos.length -2; i++) { //funcion para crear parrfo
        text(this.textos[i], width / 2, y);
        y += 40; // interlineado
      }

      fill(0);
      this.boton (width / 2 - 70, height /2);
      fill (255);
      textSize(20);
      text(this.textos[22], width / 2, height / 2 + 20);
    }
  }
  
  manejosonido() {
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();
    }
  }

  boton(x, y) {
    rect(x, y, 140, 40);
  }

  comenzarJuego(tecla) {
    if (tecla === ENTER && this.estado === 1) {
      this.estado = 2;
    }
  }

mouseclic() {
    if (this.estado === 0) {
      let x = width / 2 - 70;
      let y = height / 2;
      let an = 140;
      let al = 40;
      if (mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al) {
        this.estado = 1; // Cambia al estado de juego
        fondo.cambiaimagen();
        this.manejosonido();
      }
    } else if (this.estado === 3 || this.estado === 4) {
      let x = width / 2 - 70;
      let y = height / 2;
      let an = 140;
      let al = 40;
      if (mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al) {
        this.reiniciarJuego();  // reinicia juego
      }
    }
  }
  reiniciarJuego() {
    this.estado = 1;
    vidas = 3;
    this.linternasRecolectadas = 0;
    this.crearObstaculos();
    this.crearLinternas();
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i = 0; i < this.cantidadObstaculos; i++) {
      this.obstaculos.push(new Obstaculo(random(width), random(-100, -10), 20));
    }
  }

crearLinternas() {
  this.linternas = [];
  for (let i = 0; i < this.cantidadLinternas; i++) {
    this.linternas.push(new Linterna(random(50, width - 50), random(50, height - 200), 30));
  }
}


  crearPersonaje() {
    this.personaje = new Personaje(width / 2, height - 50, 30);
  }

  teclasMovimiento(keyCode) {
    if (this.estado === 2) {
      this.personaje.teclasMovimiento(keyCode);
    }
  }
}

function ordenTexto (linea) {
  fill(255); // color del texto
  if (orden < textos.length)
  {
    text(textos [linea], width/2, height/2); //centrar
  }
}
