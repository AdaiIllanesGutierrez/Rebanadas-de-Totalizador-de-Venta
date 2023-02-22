import Mostrar from "./estado.js"
import preNeto from "./preNeto.js"

const first = document.querySelector("#item");
const div = document.querySelector("#resultado");
const form = document.querySelector("#items-form");
const estado = document.querySelector("#estado");

const itempre=document.querySelector("#precioitem");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstnumber=Number.parseInt(first.value);
  const secondnumber=Number.parseInt(itempre.value);
 div.innerHTML="PRECIO NETO: "+ preNeto(firstnumber,secondnumber);

  //div.innerHTML = "cantidad de items " + first.value+ " precio item "+ itempre.value+" porcentaje: " + Mostrar(estado.value) ;
  
});
