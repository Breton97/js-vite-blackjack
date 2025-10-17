   import { determinarGanador } from './'
   
   export const turnoComputadora = (puntosMinimos) => {
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