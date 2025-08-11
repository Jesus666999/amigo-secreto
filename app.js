
function agregarAmigo() {
    let nombre = document.getElementById("nombreAmigo").value;
    if ((nombre.length) > 0) {
        addFriend(nombre);
    } else {
        alert("Ingrese un nombre");
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