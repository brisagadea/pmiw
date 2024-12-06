class ImagenesFondo {
  constructor() {
    this.imagenes = [];
    this.imagenactual = 0;
    
    
  }
  
  cargaimagenes() {
    for (let i=0; i<2; i++) {
      this.imagenes [i] = loadImage("data/casa" + i + ".jpg");
    }
  }

  dibujar () { 
     if (this.imagenes[this.imagenactual]) {
      imageMode(CENTER);
      image(this.imagenes[this.imagenactual], width / 2, height / 2, 640, 480);
    }
  }

  cambiaimagen() {
    this.imagenactual = (this.imagenactual + 1) % this.imagenes.length;
  }
}
