import vari from './variables.js';



function agregarPoke() {
    const Pokemon = vari.pokeUser.value;
    const botonBorrar = document.createElement('a');
    botonBorrar.classList = 'borrar-pokemon';
    botonBorrar.innerText = 'X'; 
    const li = document.createElement('li');
    li.innerText = Pokemon;
    li.appendChild(botonBorrar);

    vari.listaSearch.appendChild(li);
    agregarPokeLocalStorage(Pokemon);
}


function borrarPoke(e) {
    e.preventDefault();
    if(e.target.className === 'borrar-pokemon') {
        e.target.parentElement.remove();
        borrarPokeLocalStorage(e.target.parentElement.innerText);
    }
}

function localStorageListo() {
    let pokemons;
    pokemons = obtenerPokeLocalStorage();
    pokemons.forEach(function(pokemon) {
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-pokemon'; 
        botonBorrar.innerText = 'X'; 
        const li = document.createElement('li');
        li.innerText = pokemon;
        li.appendChild(botonBorrar);
        vari.listaSearch.appendChild(li);
    });
}

function agregarPokeLocalStorage(pokemon) {
    let pokemons;
    pokemons = obtenerPokeLocalStorage();
    pokemons.push(pokemon); 
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
}

function obtenerPokeLocalStorage() {
    let pokemons;
    if(localStorage.getItem('pokemons') === null ) {
        pokemons = [];
    } else {
        pokemons = JSON.parse(localStorage.getItem('pokemons'));
    }
    return pokemons;
}

function borrarPokeLocalStorage(pokemon) {

    let pokemons, pokeBorrar;
    pokeBorrar = pokemon.substring(0, pokemon.length - 1);

    pokemons = obtenerPokeLocalStorage();
    pokemons.forEach(function(pokemon, index) {
        if(pokeBorrar === pokemon) {
            pokemons.splice(index, 1);
        }
    });
    localStorage.setItem('pokemons', JSON.stringify(pokemons));
}

export default {
    agregarPoke,
    borrarPoke,
    localStorageListo
}