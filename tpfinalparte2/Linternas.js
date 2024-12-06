class Linterna {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño *2;
    this.recolectada = false;
    this.velocidad = 3;
  }

  mostrar() {
    if (!this.recolectada) {
      image(imglinternita, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
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
