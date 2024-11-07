// src/Saiyan.js

import Luchador from './Luchador.js';

class Saiyan extends Luchador {

  constructor(nombre, velocidad, ataque, defensa, salud) {
    super(nombre, velocidad, ataque, defensa, salud); 
    this.transformado = false;

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

  transformar() {
    if (!this.transformado) {
      this.transformado = true;
      
      this.ataque *= 1.5;
      this.velocidad *= 1.3;
      this.defensa *= 1.2;
      
      console.log(`${this.nombre} se ha transformado en Super Saiyan! Sus atributos aumentaron.`);
    } else {
      console.log(`${this.nombre} ya está transformado en Super Saiyan!`);
    }
  }

  revertirTransformacion() {
    if (this.transformado) {
      this.transformado = false; 

      this.ataque /= 1.5;
      this.velocidad /= 1.3;
      this.defensa /= 1.2;
      
      console.log(`${this.nombre} ha revertido su transformación de Super Saiyan! Sus atributos han vuelto a la normalidad.`);
    } else {
      console.log(`${this.nombre} no está transformado.`);
    }
  }
}

export default Saiyan;