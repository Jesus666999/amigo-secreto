
function agregarAmigo() {
    let nombre = document.getElementById("nombreAmigo").value;
    if ((nombre.length) > 0) {
        addFriend(nombre);
    } else {
        alert("Ingrese un nombre");
    }
}

function sortearAmigo() {
    if (listaAmigos.length > 0) {
        let resultadoElement = document.getElementById("resultado");
        let numeroRandom = Math.floor(Math.random() * listaAmigos.length);
        console.log(numeroRandom);
        let nombreResultado = listaAmigos[numeroRandom];
        resultadoElement.innerHTML = "El nombre del amigo random es: " + nombreResultado;
    } else {
        alert("No hay amigos registrados :(");
    }
}

function addFriend(nombreAmigo) {
    let friendList = document.getElementById("listaAmigos");
    listaAmigos.push(nombreAmigo);
    document.getElementById("nombreAmigo").value = "";

    let listItem = document.createElement("li");
    listItem.innerHTML = nombreAmigo;
    friendList.appendChild(listItem);
}

function setTextToElement(element, text) {
    document.getElementById(element).innerHTML = text;
}

let listaAmigos = [];