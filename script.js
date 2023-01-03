document.getElementById("parrafo").focus();
function encriptar() {
  var texto = document.querySelector("#parrafo").value;
  var textoCifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");
  document.querySelector(".mensajeEncriptado").value = textoCifrado;
  document.querySelector("#parrafo").value;
  document.querySelector("#parrafo").value = "";
}

var boton1 = document.querySelector("#btn-encriptar");
boton1.onclick = encriptar;

function desencriptar() {
  var texto = document.querySelector("#parrafo").value;
  var textoCifrado = texto
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");
  document.querySelector(".mensajeEncriptado").value = textoCifrado;
  document.querySelector("#parrafo").value;
  document.querySelector("#parrafo").value = "";
}

var boton2 = document.querySelector("#btn-desencriptar");
boton2.onclick = desencriptar;

function copy() {
  let copyText = document.querySelector(".mensajeEncriptado");
  copyText.select();
  document.execCommand("copy");
}

document.querySelector(".mensajeEncriptado").addEventListener("click", copy);

var boton3 = document.querySelector("#btn-copiar");
boton3.onclick = copy;
