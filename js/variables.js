const urlApi = "https://pokeapi.co/api/v2/pokemon/";
const urlDescrip = "https://pokeapi.co/api/v2/pokemon-species/";

const imagenPoke = document.querySelector(".img-poke");
const namePoke = document.querySelector(".name-poke");
const descriptionPoke = document.querySelector(".description");
const categoryPoke = document.querySelector(".category");
const heightPoke = document.querySelector(".height");
const weightPoke = document.querySelector(".weight");
const typesPoke = document.querySelector(".types");
const numberPoke = document.querySelector(".number");
const errorSearch = document.querySelector(".error");
const listaSearch = document.querySelector('#search-list');
const pokeUser = document.querySelector('#pokemonUser');

const btnAction = document.querySelector('#btnAction');

let id = "21";

export default {
    urlApi,
    urlDescrip,
    id,
    imagenPoke,
    namePoke,
    descriptionPoke,
    categoryPoke,
    heightPoke,
    weightPoke,
    typesPoke,
    numberPoke,
    errorSearch,
    listaSearch,
    btnAction,
    pokeUser
}