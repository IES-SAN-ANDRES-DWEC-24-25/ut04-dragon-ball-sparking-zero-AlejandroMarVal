// src/index.js

import Saiyan from './Saiyan.js';
import Namekian from './Namekian.js';
import Earthling from './Earthling.js';
import Torneo from './Torneo.js';

// Crear luchadores de prueba con diferentes razas
const luchadores = [
    new Saiyan('Goku', 100, 60, 35, 400),
    new Saiyan('Vegeta', 95, 50, 33, 380),
    new Namekian('Piccolo', 80, 45, 35, 430),
    new Namekian('Lord Slug', 70, 35, 40, 380),
    new Earthling('Krillin', 80, 40, 25, 350),
    new Earthling('Yamcha', 90, 42, 22, 360),
    new Saiyan('Gohan', 85, 48, 32, 370),
    new Earthling('Tenshinhan', 80, 44, 28, 350)
];

// Mostrar la lista de luchadores en la sección correspondiente
const listaLuchadores = document.getElementById('lista-luchadores');
luchadores.forEach(luchador => {
    const div = document.createElement('div');
    div.textContent = `${luchador.nombre} - Salud: ${luchador.salud} - Ataque: ${luchador.ataque} - Defensa: ${luchador.defensa}`;
    listaLuchadores.appendChild(div);
});

// Iniciar torneo
document.getElementById('iniciar-torneo').addEventListener('click', () => {
    const torneo = new Torneo(luchadores);
    const mensajes = torneo.iniciar();
  
    const resultadoTorneo = document.getElementById('resultado-torneo');
    resultadoTorneo.innerHTML = '';
    mensajes.forEach(mensaje => {
      const p = document.createElement('p');
      p.textContent = mensaje;
      resultadoTorneo.appendChild(p);
    });
  });
