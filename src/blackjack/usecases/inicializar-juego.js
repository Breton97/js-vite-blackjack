  import {crearDeck } from './crear-deck'
  
    const puntosHTML = document.querySelectorAll('small'),
        divCartasJugadores = document.querySelectorAll('.divCartas');
 let puntosJugadores = [];

  export const inicializarJuego = (numJugadores = 2, tiposDeCartas, tiposEspeciales) => {
    let deck = [],
    puntosJugadores = [];
    
    deck = crearDeck(tiposDeCartas, tiposEspeciales);
    // deck = crearNuevoDeck(tipos, especiales);
    console.log(deck)
    puntosJugadores = [];
    for (let i = 0; i < numJugadores; i++) {
      puntosJugadores.push(0); 
    }

    puntosHTML.forEach(elem => {elem.innerText = 0});
    divCartasJugadores.forEach(elem => {elem.innerHTML = ''});

    btnPedir.disabled = false;
    btnDetener.disabled = false;

    return deck
  };
