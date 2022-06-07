 
  const getPokemon = async (url) => {
    const response = await fetch(url);
    const pokemons = await response.json();
    return pokemons;
  }
  
  const getDescrition = async (url) => {
    const response = await fetch(url);
    const description = await response.json();
    return description;
  }
  
  
  const getInfo = async (urlPoke) => {
    const response = await fetch(urlPoke);
    const pokemon = await response.json();
    return pokemon;
  }

  const getInfoDescrp = async (urlPoke, objPoke) => {
    const response = await fetch(urlPoke);
    const pokemon = await response.json();
    const pokemonDefinitivo = await {...pokemon, ...objPoke}

    return pokemonDefinitivo;
  }


export default {
    getPokemon,
    getDescrition,
    getInfo,
    getInfoDescrp
}