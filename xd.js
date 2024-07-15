/* Elabore el siguiente programa:

Formulario HTML donde el usuario va a ingresar sus platos favoritos.

Cada vez que el usuario ingrese un plato y pulse el boton de guardar, ingresarlo en un arreglo.

Cuando el usuario pulse otro botón, el boton de mostrar, mostrar todos los platos ingresados en una tabla HTML.

Agregar la funcionalidad de modificar y de eliminar cualquiera de los platos mostrados en la tabla. */

let favFoods = [];
let arrayLength = favFoods.length;

function saveFood () {

  food1 = document.getElementById('Plato').value

  if (food1 !== '') {

  favFoods.push(food1)
  document.getElementById('Plato').value  = ''

}

}
  
function showFood () {

  var table = document.getElementById('foodTable')
  table.innerHTML = ''

  for (var i = 0; i < favFoods.length; i++){
    var row = `<tr>
                <td>${favFoods[i]}</td>
                  <td>
                    <button class="eliminar" onclick="removeFood(${i})">Eliminar</button>
                    <button class="editar" onclick="editFood(${i})">Editar</button>
                  </td>
               </tr>`
    table.innerHTML += row

  }
}

function editFood(index) {

  let newFood = prompt('Inserte nuevo alimento')
  
  if (newFood !== null && newFood !== '') {

    favFoods[index] = newFood

  }

  showFood();

}

function removeFood(index) {

  favFoods.splice(index)

  showFood();

}

  
