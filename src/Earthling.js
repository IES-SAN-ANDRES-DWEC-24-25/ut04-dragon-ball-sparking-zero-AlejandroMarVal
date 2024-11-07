// src/Earthling.js

import Luchador from './Luchador.js';

class Earthling extends Luchador {
  constructor(nombre, velocidad, ataque, defensa, salud) {
    super(nombre, velocidad, ataque, defensa, salud); 
    this.tecnicaEspecialUsada = false; 

    if (typeof velocidad !== 'number' || velocidad < 0) {
      throw new Error('La velocidad base debe ser mayor que 0.');
    }
    if (typeof ataque !== 'number' || ataque < 0) {
      throw new Error('El ataque base debe ser mayor que 0.');
    }
    if (typeof defensa !== 'number' || defensa < 0) {
      throw new Error('La defensa base debe ser mayor que 0.');
    }
    if (typeof salud !== 'number' || salud < 0) {
      throw new Error('La salud base debe ser mayor que 0.');
    }
  }

  /**
   * Usa una técnica especial para aumentar el ataque.
   */
  usarTecnicaEspecial() {
    if (!this.tecnicaEspecialUsada) {
      this.ataque *= 1.4;
      this.tecnicaEspecialUsada = true;
      console.log(`${this.nombre} ha usado una técnica especial! Ataque aumentado a ${this.ataque}`);
    } else {
      console.log(`${this.nombre} ya usó la habilidad especial.`);
    }
  }
}

export default Earthling;