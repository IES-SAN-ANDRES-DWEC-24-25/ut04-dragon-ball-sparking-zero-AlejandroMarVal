// src/SimularBatalla.js

import Saiyan from './Saiyan.js'; 
import Namekian from './Namekian.js'; 
import Earthling from './Earthling.js'; 

class SimularBatalla {
  simularBatalla(luchador1, luchador2) {
    console.log(`\n=== Nuevo combate entre ${luchador1.nombre} y ${luchador2.nombre} ===`);

    let atacante, defensor;
    if (luchador1.velocidad > luchador2.velocidad) {
      atacante = luchador1;
      defensor = luchador2;
    } else if (luchador2.velocidad > luchador1.velocidad) {
      atacante = luchador2;
      defensor = luchador1;
    } else {
      [atacante, defensor] = Math.random() < 0.5 ? [luchador1, luchador2] : [luchador2, luchador1];
    }

    console.log(`${atacante.nombre} tiene mayor velocidad y ataca primero.`);

    atacante.rondaHabilidadEspecial = Math.floor(Math.random() * 4) + 2;
    defensor.rondaHabilidadEspecial = Math.floor(Math.random() * 4) + 2;
    atacante.habilidadUsada = false;
    defensor.habilidadUsada = false;

    let rondaActual = 1;

    while (luchador1.estaVivo() && luchador2.estaVivo()) {
      console.log(`\n--- Turno de la ronda ${rondaActual} ---`);

      if (luchador1 instanceof Namekian && luchador1.salud < 50 && !luchador1.habilidadUsada) {
        luchador1.regenerarSalud();
        console.log(`${luchador1.nombre} ha regenerado salud! Salud actual: ${luchador1.salud.toFixed(2)}`);
        luchador1.habilidadUsada = true;
      }
      if (luchador2 instanceof Namekian && luchador2.salud < 50 && !luchador2.habilidadUsada) {
        luchador2.regenerarSalud();
        console.log(`${luchador2.nombre} ha regenerado salud! Salud actual: ${luchador2.salud.toFixed(2)}`);
        luchador2.habilidadUsada = true;  
      }

      if (rondaActual === atacante.rondaHabilidadEspecial && !atacante.habilidadUsada) {
        this.activarHabilidadEspecial(atacante);
      }
      if (rondaActual === defensor.rondaHabilidadEspecial && !defensor.habilidadUsada) {
        this.activarHabilidadEspecial(defensor);
      }

      const esquivar = Math.random() < 0.2;
      let danio = esquivar ? 0 : atacante.ataque;
      danio = defensor.defensa > danio ? danio * 0.9 : danio;

      if (esquivar) {
        console.log(`${defensor.nombre} esquiva el ataque de ${atacante.nombre}!`);
      } else {
        defensor.recibirDanio(danio);
        console.log(`${atacante.nombre} ataca a ${defensor.nombre} infligiendo ${danio.toFixed(2)} de daño. Salud restante de ${defensor.nombre}: ${defensor.salud.toFixed(2)}`);
      }

      [atacante, defensor] = [defensor, atacante];
      rondaActual++;
    }

    const ganador = luchador1.estaVivo() ? luchador1 : luchador2;
    console.log(`El ganador de este combate es ${ganador.nombre}!\n`);

    luchador1.resetear();
    luchador2.resetear();

    return ganador;
  }

  activarHabilidadEspecial(luchador) {
    if (luchador.habilidadUsada) return; 
    
    console.log(`\n${luchador.nombre} activa su habilidad especial en la ronda ${luchador.rondaHabilidadEspecial}!`);
    
    if (luchador instanceof Saiyan) {
      luchador.transformar();
      console.log(`${luchador.nombre} se transforma en Super Saiyan! Aumenta su poder.`);
    } else if (luchador instanceof Namekian) {
      if (luchador.salud < 50) {
        luchador.regenerarSalud();
        console.log(`${luchador.nombre} regenera salud!`);
      }
    } else if (luchador instanceof Earthling) {
      luchador.usarTecnicaEspecial();
      console.log(`${luchador.nombre} usa su técnica especial!`);
    }
    
    luchador.habilidadUsada = true;
  }
}

export default SimularBatalla;