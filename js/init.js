//ejemplo de asyn await

async function fetchFN() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const json = await response.json();
  console.log(json);
}

fetchFN().then();

(async function () {
  return await fetchFN();
})();

const urlApi = "https://pokeapi.co/api/v2/pokemon/";

const addCard = (nombre, imagen) => {
    // crea un nuevo div y añade contenido
    const contenedor = document.createElement("div");
    contenedor.className = "pokemon";
    const contenido = document.createTextNode(nombre);
    const contenedorImagen = document.createElement("img");
    contenedorImagen.src = imagen;
    
    contenedor.appendChild(contenido); //añade texto al div creado.
    contenedor.appendChild(contenedorImagen);
    // añade el elemento creado y su contenido al DOM
    document.querySelector("main").appendChild(contenedor);
}

const getPokemons = async (url) => {
  const response = await fetch(url);
  const pokemons = await response.json();
  return pokemons.results;
} 


const getImg = async (urlPoke) => {
  const response = await fetch(urlPoke);
  const pokemon = await response.json();
  console.log(pokemon);
  return pokemon.sprites.front_default;
}

// AQUI ocurrirá el primer llamado a la API
getPokemons(urlApi).then((pokemones) => {
  pokemones.forEach((pokemon) => {
    getImg(pokemon.url).then((imagen) =>
      addCard(pokemon.name, imagen)
    );
  });
});

