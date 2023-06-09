
const listaVazia = document.getElementById('valores')

function add() {
    const formulario = document.querySelector(".form")
    const numeros = document.getElementById('valor').value
    const item = document.createElement("li")



    item.innerHTML = numeros
    listaVazia.appendChild(item)
    formulario.reset();
}


function ordenar() {
    const valores = []
    const selectOptions = document.getElementById('selectOptions').value
    const lista = document.querySelector('#valores')
    const listaTagsValores = lista.querySelectorAll("li");
    console.log(listaTagsValores)

    const listaDesordenada = [];
    listaTagsValores.forEach(numero => {
        listaDesordenada.push(numero.textContent)
        console.log(numero.textContent)

    });

    console.log(listaDesordenada);

    if (selectOptions == "bubbleSort") {

        const listaOrdenada = bubbleSort(listaDesordenada);
        console.log(listaOrdenada);
        let i = 0;
        listaTagsValores.forEach(tag => {
            tag.textContent = listaOrdenada[i];
            i++;

        });
        const listaEmbaralhada = misturar(listaDesordenada);
        console.log(listaEmbaralhada);
    }
    else if (selectOptions == "selectionSort") {
        const listaOrdenada = selectionSort(listaDesordenada);
        let i = 0;
        listaTagsValores.forEach(tag => {
            tag.textContent = listaOrdenada[i];
            i++;

        })
    }
    else {
        const listaOrdenada = quickSort(listaDesordenada);
        let i = 0;
        listaTagsValores.forEach(tag => {
            tag.textContent = listaOrdenada[i];
            i++;

        })
    }

}


function misturar() {
    const lista = document.querySelector('#valores')
    const listaTagsValores = lista.querySelectorAll("li");
    const listaordenada = [];
    listaTagsValores.forEach((numero) => {
        listaordenada.push(numero.textContent);
    });

    const listaEmbaralhada = misturando(listaordenada);
    let i = 0;
    listaTagsValores.forEach((tag) => {
        tag.textContent = listaEmbaralhada[i];
        i++;
    });
}

function misturando(lista) {

    for (let i = lista.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lista[i], lista[j]] = [lista[j], lista[i]];
    }
    return lista;

}



function bubbleSort(lista) {
    console.log('lista', lista)
    var len = lista.length;

    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (lista[j] > lista[j + 1]) {
                // Troca os elementos de posição se estiverem fora de ordem
                var temp = lista[j];
                lista[j] = lista[j + 1];
                lista[j + 1] = temp;
            }
        }
    }
    const listaOrdenada = lista.sort()
    console.log('listaOrdenada', listaOrdenada)
    return lista;
}

function selectionSort(lista) {
    var len = lista.length;
    for (var i = 0; i < len - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < len; j++) {
            if (lista[j] < lista[minIndex]) {
                minIndex = j;
            }
        }
        // Troca o elemento atual com o elemento de menor valor encontrado
        var temp = lista[i];
        lista[i] = lista[minIndex];
        lista[minIndex] = temp;
    }
    return lista;
}

function quickSort(lista) {
    if (lista.length <= 1) {
        return lista;
    }

    var pivot = lista[Math.floor(lista.length / 2)];
    var left = [];
    var right = [];

    for (var i = 0; i < lista.length; i++) {
        if (lista[i] < pivot) {
            left.push(lista[i]);
        } else if (lista[i] > pivot) {
            right.push(lista[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));
}   