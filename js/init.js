import datapoke from './datapoke.js';
import vari from './variables.js';
import {showPoke} from './mostrarPoke.js';
import {errorPoke} from './errorsPoke.js';
import localStoragePoke from './localStoragePoke.js';


clickSearch()

function clickSearch() {
    
    vari.btnAction.addEventListener('click', localStoragePoke.agregarPoke);

    vari.listaSearch.addEventListener('click', localStoragePoke.borrarPoke);

    document.addEventListener('DOMContentLoaded', localStoragePoke.localStorageListo);
    
    
}


datapoke.getInfo(`${vari.urlApi}${vari.id}`).then((pokemon) => {
  console.log(pokemon);
  const pokemonObjt = {
    nombre: pokemon.name,
    imagen: pokemon.sprites.other.dream_world.front_default,
    altura: pokemon.height,
    peso: pokemon.weight,
    numero: pokemon.id,
    listaTipo: pokemon.types.map(pokeTipo => pokeTipo.type.name).join(", ")
  } 
    
    datapoke.getInfoDescrp(pokemon.species.url, pokemonObjt).then((pokemonDescr) => {

      

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
      
    }
    ).catch(error => {
      errorPoke();
    })
}

).catch(error => {
  errorPoke();
})




