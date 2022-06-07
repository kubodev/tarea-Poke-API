import localStoragePoke from './localStoragePoke.js';
import {showPoke} from './mostrarPoke.js';
import {errorPoke} from './errorsPoke.js';
import vari from './variables.js';

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

  const getInfoUser = () => {
    getInfo(`${vari.urlApi}${vari.pokeUser.value}`).then((pokemon) => {
        vari.errorSearch.innerHTML = "";
        
        const pokemonObjt = {
          nombre: pokemon.name,
          imagen: pokemon.sprites.other.dream_world.front_default,
          altura: pokemon.height,
          peso: pokemon.weight,
          numero: pokemon.id,
          listaTipo: pokemon.types.map(pokeTipo => pokeTipo.type.name).join(", ")
        } 
          
          getInfoDescrp(pokemon.species.url, pokemonObjt).then((pokemonDescr) => {
      
            
      
            const DesEs = pokemonDescr.flavor_text_entries.findIndex((e) => e.language.name == "es");
            const CatEs = pokemonDescr.genera.findIndex((e) => e.language.name == "es");
          
            showPoke( pokemonDescr.nombre,
                      pokemonDescr.imagen,
                      pokemonDescr.altura,
                      pokemonDescr.peso,
                      pokemonDescr.numero,
                      pokemonDescr.listaTipo,
                      pokemonDescr.flavor_text_entries[DesEs].flavor_text,
                      pokemonDescr.genera[CatEs].genus
              )
              localStoragePoke.agregarPoke();
              vari.cardContent.classList.remove("hide");
          }
          ).catch(error => {
            errorPoke();
          })
      }
      
      ).catch(error => {
        errorPoke();
      })
  }


export default {
    getPokemon,
    getDescrition,
    getInfo,
    getInfoDescrp,
    getInfoUser
}