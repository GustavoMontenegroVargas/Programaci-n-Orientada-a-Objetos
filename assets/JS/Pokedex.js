class Pokedex{

    getinfo (name){/* getinfo es el nombre del método */
        fetch(`https://workshop-mongo.herokuapp.com/pokemon/name/${name}`)
        .then(data => data.json())
        .then(data =>{
            /* Solo se pueden desestructurar objetos y arreglos, para eso es el DATA = null */
            const [DATA = null] = data; /* Valor por defecto si data no contiene elementos */
            const MESSAGE = DATA || `El pokemón ${name} no existe`;/* Existencia, si DATA contiene algo */
            
            console.log(MESSAGE);
        })
    }
}
const POKEDEX = new Pokedex();
POKEDEX.getinfo('charmander');