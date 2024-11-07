// src/Namekian.js

import Luchador from './Luchador.js';

class Namekian extends Luchador {
    constructor(nombre, velocidad, ataque, defensa, salud) {
        super(nombre, velocidad, ataque, defensa, salud); 
        this.regenerado = false; // Indica si ha usado la regeneración

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
     * Regenera salud automáticamente si la salud está por debajo de 50 y si no se ha regenerado aún.
     */
    regenerarSalud() {
        if (!this.regenerado && this.salud < 50) {
            this.salud += 30; // Regenera 30 puntos de salud
            this.regenerado = true;  // Marca como regenerado
            console.log(`${this.nombre} ha regenerado su salud! Salud actual: ${this.salud}`);
        } else if (this.salud >= 50) {
            console.log(`${this.nombre} no necesita regenerar salud, ya tiene más de 50 puntos.`);
        } else {
            console.log(`${this.nombre} ya se regeneró: Salud actual: ${this.salud}`);
        }
    }
}

export default Namekian;