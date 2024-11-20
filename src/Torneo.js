// src/Torneo.js

import SimularBatalla from './simularBatalla.js';
import { esPotenciaDeDos, mezclarArray } from './utils.js';

/**
 * Clase Torneo para gestionar la simulación del torneo de luchadores.
 */
class Torneo {
  constructor(luchadores) {
    if (!esPotenciaDeDos(luchadores.length)) {
      throw new Error('El número de luchadores debe ser una potencia de 2.');
    }
    this.luchadores = luchadores;
    this.ronda = 1;
  }

  iniciar() {
    let participantes = [...this.luchadores];
    mezclarArray(participantes);

    const simularBatalla = new SimularBatalla();
    const mensajesTotales = [];

    while (participantes.length > 1) {
      mensajesTotales.push(`=== Ronda ${this.ronda} ===`);
      const ganadores = [];

      for (let i = 0; i < participantes.length; i += 2) {
        const luchador1 = participantes[i];
        const luchador2 = participantes[i + 1];
        const { ganador, mensajes } = simularBatalla.simularBatalla(luchador1, luchador2);

        mensajesTotales.push(...mensajes);
        ganadores.push(ganador);
      }

      participantes = ganadores;
      this.ronda += 1;
    }

    const campeon = participantes[0];
    mensajesTotales.push(`El campeón del torneo es ${campeon.nombre}!`);
    return mensajesTotales;
  }
}

export default Torneo;