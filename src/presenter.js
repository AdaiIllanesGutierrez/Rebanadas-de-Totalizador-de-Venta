import Mostrar from "./estado.js"
import preNeto from "./preNeto.js"
import porcentaje from "./desporcentaje.js";

const first = document.querySelector("#item");
const div = document.querySelector("#resultado");
const form = document.querySelector("#items-form");
const estado = document.querySelector("#estado");
const div2 = document.querySelector("#resultado2");
const div3 = document.querySelector("#resultado3");
const div4 = document.querySelector("#resultado4");
const itempre=document.querySelector("#precioitem");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const firstnumber=Number.parseInt(first.value);
  const secondnumber=Number.parseInt(itempre.value);
  const prNeto=preNeto(firstnumber,secondnumber)
 div.innerHTML="PRECIO NETO: "+ prNeto;
 div2.innerHTML="DESCUENTO ("+ porcentaje(prNeto)*100 +" %) : " + porcentaje(prNeto)*prNeto ;

 div3.innerHTML="IMPUESTO PARA "+estado.value + " : "+ Mostrar(estado.value)*preNeto(firstnumber,secondnumber);
 const total=((Mostrar(estado.value)*preNeto(firstnumber,secondnumber))+preNeto(firstnumber,secondnumber))-(porcentaje(prNeto)*prNeto);
 div4.innerHTML="PRECIO TOTAL DESCUENTO MAS IMPUESTO: "+ total;
  //div.innerHTML = "cantidad de items " + first.value+ " precio item "+ itempre.value+" porcentaje: " + Mostrar(estado.value) ;
  
});
