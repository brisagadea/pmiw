class Linterna {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
    this.recolectada = false;
    this.velocidad = 3;
  }

  mostrar() {
    if (!this.recolectada) { // Mostrar solo si no está recolectada
      fill(255, 223, 0); // Color amarillo para el foco
      ellipse(this.x, this.y - this.tamaño / 4, this.tamaño, this.tamaño / 2); // Foco de la linterna

      fill(100); // Color gris para el cuerpo
      rect(this.x - this.tamaño / 4, this.y, this.tamaño / 2, this.tamaño); // Cuerpo de la linterna

      fill(50); // Color más oscuro para el mango
      rect(this.x - this.tamaño / 8, this.y + this.tamaño, this.tamaño / 4, this.tamaño / 2); // Mango
    }
  }
  mover () {
    this.y += this.velocidad;
    if (this.y > height) {
      this.resetear();
    }
  }
  resetear() {
    this.x = random(50, width - 50);
    this.y = random(-200, -50); // Reinicia fuera de la pantalla
  }

  colisionaCon(personaje) {
    // Detecta colisión
    let distancia = dist(this.x, this.y, personaje.x + personaje.tamaño / 2, personaje.y + personaje.tamaño / 2);
    return distancia < this.tamaño / 2 + personaje.tamaño / 2;
  }
}
