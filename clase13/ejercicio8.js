const table = document.getElementById('tabla');

const filas = 5;
const columans = 6;

for(let i = 0; i < filas; i++){
    const fila = document.createElement('tr')
    for(let j = 0; j < columans; j++){
        const celda = document.createElement('td');
        celda.innerHTML = i + ',' + j;

        fila.appendChild(celda);
    }
    table.appendChild(fila);
}