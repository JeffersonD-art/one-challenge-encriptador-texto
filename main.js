const botonE = document.getElementById("botonEnc");
const botonD = document.getElementById("botonDec");
const botonC = document.getElementById("botonCop");
const botonP = document.getElementById("botonCop");
const botonB = document.getElementById("botonborrar");
const letras = /[A-Z~!@#$%^&*()_+|}{[\]\\\/?=><:"`;.,áéíóúàèìòù'1-9]/g; //[a-z] podria ser mejor pero no funciona como quiero, hay que mejorar!

function validar() {
    let nuevomensaje = document.getElementById("texto").value;
    if (nuevomensaje.match(letras) != null) {
        limpiar();
        foco();
        Swal.fire({   //https://sweetalert2.github.io/  (popus box) caja de alerta
            position: "center",
            icon: "error",
            title: "Solo letras minúsculas y sin acentos",
            showConfirmButton: true,
            background: "#f8ed8f",
            backdrop: `
            rgba(123, 8, 0, 0.4)
            url("./img/nyan-cat.gif")
            left top
            no-repeat
            `,
        });
    }
}

function encriptar() {
    let nuevoTexto = document.getElementById("texto").value.trimStart();
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
    ocultarImagen();
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
    ocultarImagen();
}

function copiar() {
    document.getElementById("texto").placeholder = "";
    let textCopi = document.getElementById("tArea");
    textCopi.select();
    document.execCommand("copy");
    limpiar();

    foco();
    Swal.fire({
        position: "center",
        icon: "success",
        title: "Texto copiado",
        showConfirmButton: false,

        timer: 1500,
    });
}

function ocultarImagen() {
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

function borrar() {
    document.getElementById("texto").placeholder = "Ingrese el texto aqui";
    document.getElementById("tArea").placeholder = "";
    document.getElementById("tArea").style.color = "#495057";
    limpiar();
    foco();
    ocultarImagen();
}

foco();
botonE.addEventListener("click", validar);
botonE.addEventListener("click", encriptar);

botonD.addEventListener("click", validar);
botonD.addEventListener("click", desencriptar);

botonC.addEventListener("click", copiar);
botonB.addEventListener("click", borrar);
