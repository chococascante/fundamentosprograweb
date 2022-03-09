function click() {
    const etiquetas = document.getElementsByTagName('label');

    for (etiqueta of etiquetas) {
        etiqueta.style.color = 'blue';
    }
}


window.onload = function () {
    // Obtener un elemento de HTML
    // const input = document.getElementById('input-id');
    // const input1 = document.getElementsByClassName('formulario');
    // const queryId = document.querySelector('#input-id');
    // const queryClase = document.querySelector('.formulario');

    // const queryAll = document.querySelectorAll('.formulario');

    const etiquetas = document.getElementsByTagName('label');

    for (etiqueta of etiquetas) {
        etiqueta.style.color = 'red';
    }
}

const arregloEtiquetas = [
    {
        tag: 'label', innerHTML: 'Identificacion', style: {
            color: 'black'
        }
    },
    {
        tag: 'label', innerHTML: 'Nombre', style: {
            color: 'black'
        }
    },
    {
        tag: 'label', innerHTML: 'Apellidos', style: {
            color: 'black'
        }
    },
    {
        tag: 'label', innerHTML: 'Correo electronico', style: {
            color: 'black'
        }
    }
]