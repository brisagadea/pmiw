// Clase Linterna
class Linterna {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
    this.recolectada = false;
  }

  mostrar() {
    if (this.recolectada) {
      // Dibuja el cuerpo de la linterna
      fill(255, 223, 0); // Color amarillo para el foco
      ellipse(this.x, this.y - this.tamaño / 4, this.tamaño, this.tamaño / 2); // Foco de la linterna

      fill(100); // Color gris para el cuerpo
      rect(this.x - this.tamaño / 4, this.y, this.tamaño / 2, this.tamaño); // Cuerpo de la linterna

      fill(50); // Color más oscuro para el mango
      rect(this.x - this.tamaño / 8, this.y + this.tamaño, this.tamaño / 4, this.tamaño / 2); // Mango
    }
  }

  colisionaCon(personaje) {
    // Detecta colisión circular entre el personaje y la linterna
    let distancia = dist(this.x, this.y, personaje.x + personaje.tamaño / 2, personaje.y + personaje.tamaño / 2);
    return distancia < this.tamaño / 2 + personaje.tamaño / 2;
  }
}
