const prompt = require("prompt-sync")();
var array = ["un arrray", "jijiji", 24, "okokk"];
console.log(array);
//insertar
//array.push('juepuchica');
//console.log(array);

//eliminar
array.pop();
//console.log(array);

//eliminar especifico elimina de ahy para adelante
array.splice(2);
//console.log(array);

//eliminar  agregar
array.splice(1, 2, "agregado");
//console.log(array);

//array asociativo:json
// const yo = {
//   name: "sebas",
//   last: "espinosa",
//   interes: "jS",
// };
// yo.nuevo = "fotografia";

// console.log(yo.name);
// delete yo.last;

contactos = {
  sebas: 101010,
  cristiano: 202020,
  falcao: 303030,
  saibaman: 404040,
  101010:'este ees lo que tengo que corregir',
};
console.log(contactos);

//funcion para saber el nombre de la propiedad en un objeto
function nameProperty(contactos,valor) {
  for(let propiedad in contactos){
    if(contactos.hasOwnProperty(propiedad) && contactos[propiedad]===valor){
      return propiedad;
    }
  }
  return null;
}


function agenda(params) {
  console.log("elige 1:buscar - 2:insertar - 3:actualizar - 4:eliminar - 5:salir");
  const chosse = parseInt(prompt("elige la opcion"));

  switch (chosse) {
    case 1:
      console.log("vas a buscar ");
      console.log("buscar por nombre( 1 ) --por numero(2) ");
      const select = parseInt(prompt("buscar por nombre 1 por numero 2"));
      if (select === 1) {
        const name = prompt("Ingresa nombre:");
        console.log(`Nombre: ${name} - Número de celular: ${contactos[name]}`);
      } else if (select === 2) {
        const number = parseInt (prompt("Ingresa número:"));
        console.log(`nombre :${(nameProperty(contactos, number))} - telefono:${number}`);
      } else {
        console.log("Entrada no correcta.");
      }

      break;
    case 2:
      console.log("vas a insertar nombre y numero de telefono");
      const nameN = prompt("ingresa el nombre");
      const numberN = prompt("numero de telefono");
      contactos[nameN] = numberN;
      console.log(contactos);
      break;
    case 3:
      console.log("actualizar");
      console.log(contactos);
      const actuaizar=prompt('escribe el contacto que vas a actuaizar');

      break;
    case 4:

      console.log("eliminar");
      const delet=prompt("escirbe el contacto a eliminar");
      delete contactos[delet];
      console.log(contactos);
      break;
    case 5:
      console.log("salir");

      break;

    default:
      console.log("dato invalido");
      break;
  }
}

agenda();
