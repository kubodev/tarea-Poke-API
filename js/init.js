import datapoke from './datapoke.js';
import vari from './variables.js';
import localStoragePoke from './localStoragePoke.js';

clickSearch()

function clickSearch() {

    vari.btnAction.addEventListener('click', datapoke.getInfoUser);

    vari.listaSearch.addEventListener('click', localStoragePoke.borrarPoke);

    document.addEventListener('DOMContentLoaded', localStoragePoke.localStorageListo);
    
}

