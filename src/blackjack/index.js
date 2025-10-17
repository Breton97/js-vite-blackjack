import _ from 'underscore';
// import { crearDeck as crearNuevoD} from './usecases/crear-deck';
import {crearDeck, pedirCarta, valorCarta, crearCarta, determinarGanador} from './usecases'

let deck = [];
const tipos = ['C', 'D', 'H', 'S'],
      especiales = ['A', 'J', 'Q', 'K'];

  let puntosJugadores = [];

  // Referencias HTML
  const btnPedir = document.querySelector('#btnPedir'),
        btnDetener = document.querySelector('#btnDetener'),
        btnNuevo = document.querySelector('#btnNuevo');

  const puntosHTML = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');

  // Esta función inicializa el juego
  const inicializarJuego = (numJugadores = 2) => {
    deck = crearDeck(tipos, especiales);

    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0); 
    }

    puntosHTML.forEach(elem => {elem.innerText = 0});
    divCartasJugadores.forEach(elem => {elem.innerHTML = ''});

    btnPedir.disabled = false;
    btnDetener.disabled = false;
  };

    // Acumular puntos
    // Turno 0 = primer jugador y el ultimo será la computadora
    const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
    };

    // Funcion Turno Computadora
    const turnoComputadora = (puntosMinimos) => {
      let puntosComputadora = 0;
      do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length-1);

        const imgCarta = crearCarta(carta)
        divCartasJugadores[1].append(imgCarta);

        // crearCarta(carta, puntosJugadores.length-1);
    
      } while ((puntosMinimos > 21) ? false :
            (puntosComputadora >= 21) ? false :
            (puntosComputadora > puntosMinimos) ? false : true
            )

        determinarGanador(puntosJugadores)
    };

    // Eventos
  btnPedir.addEventListener('click', () => {

    // Extraer valor de la carta que salga
    const carta = pedirCarta(deck);
    const puntosJugador = acumularPuntos(carta, 0)

    const imgCarta = crearCarta( carta )
    divCartasJugadores[0].append(imgCarta);

    // Control Puntaje 
    if (puntosJugador > 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    } else if(puntosJugador === 21) {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador);
    }    
    });

  btnDetener.addEventListener('click', () => {
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugadores[0]); 
  })

  btnNuevo.addEventListener('click', () => {
    inicializarJuego();
   })