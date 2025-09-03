let miParrafo = document.getElementById("miParrafo");

function cambiar(){
    miParrafo.innerText = "Este párrafo recibió un clic";
    miParrafo.style.color = "salmon";
}

miParrafo.addEventListener("click", cambiar);