class Obstaculo {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
    this.velocidad = 2;
  }

  mostrar() {
    fill(0, 0, 255);
    rect(this.x, this.y, this.tamaño, this.tamaño);
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
      personaje.y < this.y + this.tamaño &&
      personaje.y + personaje.tamaño > this.y
    );
  }

  resetear() {
    this.y = -this.tamaño;
    this.x = random(width);
  }
}
