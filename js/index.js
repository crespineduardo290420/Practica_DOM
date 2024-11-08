//ejercicio 1

function cambiarEstilo(colorName){
    let elementoH5 = document.getElementById('textoEjercicio1');

    elementoH5.style.color = colorName;

}


//ejercicio2

function crearElemento(){

    //creando nuevo elemento Li y que tenga texto del input
    let nuevoElementoLi = document.createElement('Li');
    nuevoElementoLi.textContent = document.getElementById('newTaskInput').value;
    //donde se agrega el elemento nuevo Li
    document.getElementById('tasks').appendChild(nuevoElementoLi);
    document.getElementById('newTaskInput').value = '';
}