    // Acumular puntos
    // Turno 0 = primer jugador y el ultimo será la computadora
    export const acumularPuntos = (carta, turno) => {
      puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
      puntosHTML[turno].innerText = puntosJugadores[turno];
      return puntosJugadores[turno];
    };