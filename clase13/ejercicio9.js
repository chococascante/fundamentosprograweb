function changeContent() {
    const inputFila = document.querySelector('#input-fila');
    const inputColumna = document.querySelector('#input-columna');

    const inputValor = document.querySelector('#input-valor');

    const tabla = document.querySelector('#myTable');

    const filas = tabla.rows;

    if(inputFila.value > filas.length || inputColumna.value > filas[0].length){
        console.log('No existe esa direccion en la tabla.')
    }

    for(let i = 0; i < filas.length; i++){
        if(i === inputFila.value){
            for(let j = 0; j > filas[i].length; j++) {
                const celdas = filas[0].cells;

                if(j === inputColumna.value) {
                    celdas[j].innerHTML = inputValor;
                }
            }
        }
    }
}