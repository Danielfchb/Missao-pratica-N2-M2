


const butaoAdicionar = document.querySelector(".adicionar");


butaoAdicionar.addEventListener('click',function add(){
    
    
    const listaVazia = document.getElementById('valores')
    
    const formulario = document.querySelector(".form")
    const numeros = document.getElementById('valor')
    console.log(numeros.value);
    const item = document.createElement("li")



    item.innerHTML = numeros.value
    listaVazia.appendChild(item)
    formulario.reset();

})







function ordenar() {
    const valores = []
    const selectOptions = document.getElementById('selectOptions').value
    const lista = document.querySelector('#valores')
    const listaTagsValores = lista.querySelectorAll("li");
    // console.log(listaTagsValores)

    const listaDesordenada = [];
    listaTagsValores.forEach(numero => {
        listaDesordenada.push(numero.textContent)
        // console.log(numero.textContent)

    });

    if (selectOptions === "bubbleSort") {
        const listaOrdenada = bubbleSort(listaDesordenada);

        let i = 0;
        listaTagsValores.forEach(tag => {
            tag.textContent = listaOrdenada[i];
            i++;
        });
    }
    else if (selectOptions === "selectionSort") {
        const listaOrdenada = selectionSort(listaDesordenada);
        let i = 0;
        listaTagsValores.forEach(tag => {
            tag.textContent = listaOrdenada[i];
            i++;

        })
    }
    else if (selectOptions === "swap") {
        const listaOrdenada = Swap(listaDesordenada, 0, 1);
        let i = 0;
        listaTagsValores.forEach(tag => {
            tag.textContent = listaOrdenada[i];
            i++;

        })

    }
    else {
        const listaOrdenada = quickSort(listaDesordenada,0,(listaDesordenada.length-1));
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

function Swap(lista, position1, position2) {
    // Verifica se as posições são válidas
    if (position1 < 0 || position1 >= lista.length || position2 < 0 || position2 >= lista.length) {
        console.log("Posições inválidas.");
        return;
    }

    // Realiza a troca dos valores
    var temp = lista[position1];
    lista[position1] = lista[position2];
    lista[position2] = temp;

    return lista
}



function bubbleSort(lista) {
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

function quickSort(array, start, end) {
    if (start < end) {
        var pivot = array[end];
        var partitionIndex = partition(array, start, end, pivot);

        quickSort(array, start, partitionIndex - 1);
        quickSort(array, partitionIndex + 1, end);

    }
    return array;
}

function partition(array, start, end, pivot) {
    var pivotIndex = array.indexOf(pivot);
    swap(array, pivotIndex, end);

    var pivotValue = array[end];
    var i = start - 1;

    for (var j = start; j < end; j++) {
        if (array[j] <= pivotValue) {
            i++;
            swap(array, i, j);
        }
    }

    swap(array, i + 1, end);
    return i + 1;
}

function swap(array, position1, position2) {
    var temp = array[position1];
    array[position1] = array[position2];
    array[position2] = temp;
}

