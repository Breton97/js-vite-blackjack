 import _ from 'underscore';

 /**
  * 
  * @param {Array<string>} tiposDeCartas - Type of carts as C, D, H, S
  * @param {Array<string>} tiposEspeciales - Type of carts as A, J, Q, K
  * @returns {Array<string>} Retorna un nuevo Deck de cartas
  */
  export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    let deck = [];
    deck = [];

    for(let i = 2 ; i <= 10 ; i++){
      for(let tipo of tiposDeCartas){
        deck.push(i + tipo);
        };
    };

    for(let tipo of tiposDeCartas){
        for(let especial of tiposEspeciales){
        deck.push(especial + tipo);
        };
    };

    return _.shuffle(deck);
  };