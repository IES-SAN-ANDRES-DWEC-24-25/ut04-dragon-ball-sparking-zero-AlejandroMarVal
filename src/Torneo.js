// src/Torneo.js

import SimularBatalla from './simularBatalla.js'; 
import { esPotenciaDeDos, mezclarArray } from './utils.js'; 

/**
 * Clase Torneo para gestionar la simulación del torneo de luchadores.
 */
class Torneo {

  /**
   * Crea una instancia de Torneo.
   * @param {Luchador[]} luchadores 
   */
  constructor(luchadores) {
    // Verificar que el número de luchadores sea una potencia de 2
    if (!esPotenciaDeDos(luchadores.length)) {
      throw new Error('El número de luchadores debe ser una potencia de 2.');
    }
    this.luchadores = luchadores;
    this.ronda = 1;
  }

  /**
   * Inicia el torneo, simulando las rondas hasta determinar un campeón.
   * @returns {Luchador} - El campeón del torneo.
   */
  iniciar() {
    let participantes = [...this.luchadores]; 
    mezclarArray(participantes);

    console.log(`\nIniciando el torneo con ${participantes.length} luchadores!\n`);

    // Crear una instancia de SimularBatalla
    const simularBatalla = new SimularBatalla();

    while (participantes.length > 1) {
      console.log(`\n=== Ronda ${this.ronda} ===`);
      const ganadores = [];

      for (let i = 0; i < participantes.length; i += 2) {
        const luchador1 = participantes[i];
        const luchador2 = participantes[i + 1];

        // Usar la instancia de SimularBatalla para simular la batalla
        const ganador = simularBatalla.simularBatalla(luchador1, luchador2);
        
        ganadores.push(ganador);
      }

      participantes = ganadores;
      this.ronda += 1;
    }

    const campeon = participantes[0];
    console.log(`\nEl campeón del torneo es ${campeon.nombre}!\n`);
    return campeon;
  }
}

export default Torneo;