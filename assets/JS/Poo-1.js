/* Este es verdadero encapsulamiento. Los datos solo pueden ser
afectados desde adentro. */
'use strict';
class Pokemon{ /* Tenemos que nombrar la clase */
    #name = "";
    #type = ""; 
    #evolutions = [];

    constructor(name,type,evolutions){ 
        this.#name = name;
        this.#type = type;
        this.#evolutions = evolutions;
    }
 /* Para encapsular los datos, debe colocarse un #. Indica que es un aributo privado. */
 /* con el mètodo set, poder modificar los valores privados desde dentro  */
/* Set recibe un nuevo valor */

    set name(value) {
        this.#name =  value;
    }
    set type(value) {
        this.#type =  value;
    }
    set evolutions(value) {
        this.#evolutions =  value;
    }
    get name() {
        return this.#name;
    }
    get type() {
        return this.#type;
    }
    get evolutions() {
        return this.#evolutions;
    }



    attack(){
        return `${this.#name}, está atacando`;
    } /* Fin método attack */

   
    evolve (evolution = 0){/* Vuelves a los parámetros opcionales. Si no hay parámetro, usa el parámetro por defecto. */
        const EVOLVE = this.#evolutions[evolution] || "";/* Te devuelve el index si existe, si no existe, te devuelve la cadena vacía. */
        /* Si la primera sentencia existe, se queda esa asingación, si no existe, se queda en la derecha. */
        let message = 'No puedo evolucionar';

        if(EVOLVE){/* Indica si hay algo adentro */
            message = `${this.#name} esta evolucionando a ${EVOLVE}`;
            this.#name = EVOLVE; /* Se modifica el objeto dentro del método */
        }
        return message;
    }

}

const Charmander = new Pokemon ('Charmander', 'Fuego',['Charmeleon','Charizard']);
/* charmander.evolve() Usa el parámetro por default que es igual a cero */
/* charmander.evolve(10) el diez se sobrepone al parámetro por default */

console.log(Charmander.attack());

