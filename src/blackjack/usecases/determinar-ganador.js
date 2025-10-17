   /**
    * 
    * @param {Array<number>} puntosJugadores 
    */
    export const determinarGanador = (puntosJugadores) => {

        const [puntosMinimos, puntosComputadora] = puntosJugadores;

        setTimeout(() => {
          (puntosMinimos <= 21 && puntosComputadora > 21) ? alert('Felicidades, has ganado!') : 
          (puntosComputadora === 21 && puntosMinimos === 21) ? alert('Empate, no hay ganador!') :
          (puntosMinimos > puntosComputadora && puntosMinimos < 21) ? alert('Felicidades, has ganado!') :
          alert('Lo siento, Computadora Gana!') 
    },   35 );
    }