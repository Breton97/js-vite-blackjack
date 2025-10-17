  // Esta Funcion es para tomar una carta

  /**
   * 
   * @param {Array<string>} deck 
   * @returns {string} Retorna el valor de la ultima carta y la elimina del
   */
  export const pedirCarta = (deck) => {
    if ( deck.length === 0) {
      throw 'No hay cartas en el deck';
    };

    return deck.pop(); 
  };