const texto = document.getElementById("texto");
const resultado = document.getElementById("resultado");

document
.getElementById("codificar")
.onclick=()=>{

resultado.textContent=texto.value.toUpperCase();

};

const paleta=document.getElementById("paleta");

const salida=document.getElementById("salida");

for(let i=65;i<=90;i++){

let letra=String.fromCharCode(i);

let boton=document.createElement("div");

boton.className="simbolo";

boton.textContent=letra;

boton.title=letra;

boton.onclick=()=>{

salida.value+=letra;

};

paleta.appendChild(boton);

}

document
.getElementById("limpiar")
.onclick=()=>{

salida.value="";

};