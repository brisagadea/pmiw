class Personaje {
  constructor(x, y, tamaño) {
    this.x = x;
    this.y = y;
    this.tamaño = tamaño;
    this.velocidad = 5;
  }

  mostrar() {
    fill(255, 0, 0);
    rect(this.x, this.y, this.tamaño, this.tamaño);
  }

  mover() {
    if (keyIsDown(LEFT_ARROW) && this.x > 0) {
      this.x -= this.velocidad;
    }
    if (keyIsDown(RIGHT_ARROW) && this.x < width - this.tamaño) {
      this.x += this.velocidad;
    }
  }

  teclasMovimiento(keyCode) {
  }
}
