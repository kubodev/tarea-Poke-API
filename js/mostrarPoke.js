import vari from './variables.js';

export const showPoke = (nombre, 
    imagen, 
    altura, 
    peso, 
    numero, 
    listaTipo, 
    description, 
    categoria) => {

vari.namePoke.innerHTML = nombre;
vari.imagenPoke.src = imagen;
vari.heightPoke.innerHTML = `Altuera: ${altura}`;
vari.weightPoke.innerHTML = `Peso: ${peso}`;
vari.numberPoke.innerHTML = `#${numero}`;
vari.typesPoke.innerHTML = `Tipo: ${listaTipo}`;
vari.descriptionPoke.innerHTML = `Descripción:</br> ${description}`;
vari.categoryPoke.innerHTML = categoria;


}

