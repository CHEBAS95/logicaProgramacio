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
array.splice(1, 2, "agregao");
//console.log(array);

//array asociativo:json
const yo = {
  name: "sebas",
  last: "espinosa",
  interes: "jS",
};
yo.nuevo = "fotografia";
console.log(yo.name);
delete yo.last;
console.log(yo);

function agenda(params) {
  console.log("elige 1:buscar.2:insertar,3:actualizar,4:eliminar,5:salir");
  const chosse = parseInt(prompt("elige la opcion"));

  switch (chosse) {
    case 1:
      console.log("vas a buscar");
      break;
    case 2:
      console.log("vas a insertar");
      break;
    case 3:
      console.log("actualizar");
      break;
    case 4:
      console.log("eliminar");
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
