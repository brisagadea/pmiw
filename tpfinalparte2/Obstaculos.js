class Obstaculo {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño *2;
    this.velocidad = 2;
  }

  mostrar() {
    if (!this.recolectada) {
      image(imgpuerta, this.x, this.y, this.tamaño, this.tamaño * 1.5);
    }
  }

  mover() {
    this.y += this.velocidad;
    if (this.y > height) {
      this.resetear();
    }
  }

  colisionaCon(personaje) {
    return (
      personaje.x < this.x + this.tamaño &&
      personaje.x + personaje.tamaño > this.x &&
      personaje.y < this.y + this.tamaño * 1.5 &&
      personaje.y + personaje.tamaño > this.y
      );
  }

  resetear() {
    this.y = -this.tamaño * 1.5;
    this.x = random(width);
  }
}
