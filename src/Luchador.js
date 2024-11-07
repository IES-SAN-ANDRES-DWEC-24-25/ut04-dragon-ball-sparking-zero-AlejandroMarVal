// src/Luchador.js

class Luchador {
  constructor(nombre, velocidad, ataque, defensa, salud) {
    this.nombre = nombre;
    this.velocidad = velocidad;
    this.ataque = ataque;
    this.defensa = defensa;
    this.salud = salud;

    // valores originales para restaurarlos en el reinicio
    this.velocidadInicial = velocidad;
    this.ataqueInicial = ataque;
    this.defensaInicial = defensa;
    this.saludInicial = salud;
  }

  atacar(oponente) {
    const esquiva = Math.random() < 0.2;
    if (esquiva) {
      console.log(`${oponente.nombre} esquiva el ataque de ${this.nombre}!`);
      return { exito: false, danio: 0 };
    }

    let danio = this.ataque - oponente.defensa;
    if (oponente.defensa > this.ataque) danio *= 0.9;

    danio = Math.max(danio, 0);
    oponente.recibirDanio(danio);
    return { exito: true, danio: danio };
  }

  recibirDanio(danio) {
    this.salud -= danio;
    this.salud = Math.max(this.salud, 0);
  }

  estaVivo() {
    return this.salud > 0;
  }

  resetear() {
    this.salud = this.saludInicial;
    this.ataque = this.ataqueInicial;
    this.defensa = this.defensaInicial;
    this.velocidad = this.velocidadInicial;

    this.habilidadUsada = false;
  }
}

export default Luchador;