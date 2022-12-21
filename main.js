const botonE = document.getElementById("botonEnc");
const botonD = document.getElementById("botonDec");
const botonC = document.getElementById("botonCop");
const botonP = document.getElementById("botonCop");
const botonB = document.getElementById("botonborrar");


function img() {
    var textoVacio = "";
    let textoT = document.getElementById("tArea").value;
    textoT;
    if (textoVacio !== textoT) {
        document.getElementById("tapa").style.display = "none";
    } else document.getElementById("tapa").style.display = "";
}

function limpiar() {
    document.getElementById("texto").value = "";
    document.getElementById("tArea").value = "";
}

function foco() {
    document.getElementById("texto").focus();
}

function encriptar() {
    let nuevoTexto = document.getElementById("texto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    nuevoTexto;

    document.getElementById("tArea").value = nuevoTexto;
    document.getElementById("tArea").style.color = "#495057";
    img();
}

function desencriptar() {
    let nuevoTexto = document.getElementById("texto").value;
    nuevoTexto;
    nuevoTexto = nuevoTexto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    nuevoTexto;

    document.getElementById("tArea").value = nuevoTexto;
    document.getElementById("tArea").style.color = "#495057";
    img();
}

function copiar() {
    document.getElementById("texto").placeholder = "";
    let textCopi = document.getElementById("tArea");
    textCopi.select();
    document.execCommand("copy");
    document.getElementById("texto").value = "";
    document.getElementById("tArea").value = "";

    foco();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado",
        showConfirmButton: false,
        timer: 2000,
    });
}

const letras = /[a-z]/g;
function validar() {
    let nuevomensaje = document.getElementById("texto").value;
    if (nuevomensaje.match(letras) == nuevomensaje.match(letras)) {

        document.getElementById("texto").placeholder ="Solo letras minúsculas y sin acentos";
        limpiar();
        foco();
    }
}

function borrar() {
    document.getElementById("texto").placeholder = "Ingrese el texto aqui";
    document.getElementById("tArea").placeholder = "";
    document.getElementById("tArea").style.color = "#495057";
    limpiar();
    foco();
    img();
}

foco();
botonE.addEventListener("click", validar);
botonE.addEventListener("click", encriptar);

botonD.addEventListener("click", validar);
botonD.addEventListener("click", desencriptar);

botonC.addEventListener("click", copiar);
botonB.addEventListener("click", borrar);
