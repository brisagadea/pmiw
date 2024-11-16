class Juego {
  constructor(cantidadObstaculos, cantidadLinternas) {
    this.cantidadObstaculos = cantidadObstaculos;
    this.cantidadLinternas = cantidadLinternas;
    this.estado = 0; // 0: Inicio, 1: Instrucciones, 2: Jugando, 3: Ganaste, 4: Perdiste
    this.linternasRecolectadas = 0;
    this.crearPersonaje();
    this.crearObstaculos();
    this.crearLinternas();
    this.textos = textos || [];
  }

  dibujar() {
    if (this.estado === 0) {
      // Pantalla de inicio
      background(0);
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      text(this.textos[0] || "¡Bienvenido!", width / 2, height / 2 - 100);
      fill(200, 0, 0);
      this.boton(width / 2 - 70, height / 2);
      fill(255);
      textSize(20);
      text(this.textos[1] || "Instrucciones", width / 2, height / 2 + 20);
    } else if (this.estado === 1) {
      // Pantalla de instrucciones
      background(0);
      textSize(16);
      fill(255);
      let y = height / 2 - 130;
      for (let i = 2; i < this.textos.length - 6; i++) {
        text(this.textos[i] || `Texto ${i}`, width / 2, y);
        y += 18; // Interlineado
      }
      fill(200, 0, 0);
      this.boton(width / 2 - 70, height / 2 + 120);
    } else if (this.estado === 2) {
      // Pantalla del juego
      background(220);
      this.personaje.mostrar();
      this.personaje.mover();

      for (let obstaculo of this.obstaculos) {
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

      for (let linterna of this.linternas) {
        if (!linterna.recolectada) {
          linterna.mostrar();
          if (linterna.colisionaCon(this.personaje)) {
            linterna.recolectada = true;
            this.linternasRecolectadas++;
            if (this.linternasRecolectadas >= 5) {
              this.estado = 3; // Ganaste
            }
          }
        }
      }

      // Mostrar vidas y linternas recolectadas
      fill(0);
      textSize(16);
      text(`Vidas: ${vidas}`, 10, 20);
      text(`Linternas: ${this.linternasRecolectadas}`, 10, 40);
    } else if (this.estado === 3) {
      // Pantalla de victoria
      background(0, 255, 0);
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(0);
      text("¡Ganaste!", width / 2, height / 2);
    } else if (this.estado === 4) {
      // Pantalla de derrota
      background(255, 0, 0);
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(0);
      text("Perdiste", width / 2, height / 2);
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

  mouseClic() {
    if (this.estado === 0) {
      let x = width / 2 - 70;
      let y = height / 2;
      let an = 140;
      let al = 40;
      if (mouseX > x && mouseX < x + an && mouseY > y && mouseY < y + al) {
        this.estado = 1; // Cambia al estado de instrucciones
      }
    }
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i = 0; i < this.cantidadObstaculos; i++) {
      this.obstaculos.push(new Obstaculo(random(width), random(-100, -10), 20));
    }
  }

  // Crear linternas en posiciones visibles
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
