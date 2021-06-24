class Pokemon{ /* Tenemos que nombrar la clase */
    name = "";
    type = "";
    evloutions = [];

    constructor(name,type,evolutions){ /* El constructor es una forma de llenar los objetos */
        this.name = name;
        this.type = type;
        this.evolutions = evolutions;
        /* Los de la izquierda son atributos de la clase */
        /* Los de la derecha son par */

    }/* Fin constructor */
    /* Inicio métodos */
    /* Los métodos son los encargados de cambiar los atributos del objeto de manera interna. Lo que se llama encapsulamiento */

    attack(){
        return `${this.name}, está atacando`;
    } /* Fin método attack */
   
    evolve (evolution = 0){/* Vuelves a los parámetros opcionales. Si no hay parámetro, usa el parámetro por defecto. */
        const EVOLVE = this.evolutions[evolution] || "";/* Te devuelve el index si existe, si no existe, te devuelve la cadena vacía. */
        /* Si la primera sentencia existe, se queda esa asingación, si no existe, se queda en la derecha. */
        let message = 'No puedo evolucionar';

        if(EVOLVE){/* Indica si hay algo adentro */
            message = `${this.name} esta evolucionando a ${EVOLVE}`;
            this.name = EVOLVE; /* Se modifica el objeto dentro del método */
        }
        return message;
    }

}

const Charmander = new Pokemon ('Charmander', 'Fuego',['Charmeleon','Charizard']);
/* charmander.evolve() Usa el parámetro por default que es igual a cero */
/* charmander.evolve(10) el diez se sobrepone al parámetro por default */

console.log(Charmander.attack());
console.log(Charmander.evolutions);

