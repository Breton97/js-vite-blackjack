    /**
     * 
     * @param {String} carta 
     * @returns {HTMLImageElement} imagen de retorno
     */
    export const crearCarta = (carta) => {
       //  Crear y mostrar en Pantalla la carta
      const imgCarta = document.createElement('img');
      imgCarta.src = `assets/cartas/${ carta }.png`;;
      imgCarta.classList.add('carta');
      

      return imgCarta
    };