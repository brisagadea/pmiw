class Obstaculo {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
    this.velocidad = 2;
  }

  mostrar() {
    fill(139, 69, 19); // Color marrón para la puerta
    rect(this.x, this.y, this.tamaño, this.tamaño * 1.5); // Cuerpo de la puerta

    fill(0); // Negro para el pomo
    ellipse(this.x + this.tamaño * 0.8, this.y + this.tamaño * 0.75, this.tamaño * 0.2, this.tamaño * 0.2); // manijita
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
