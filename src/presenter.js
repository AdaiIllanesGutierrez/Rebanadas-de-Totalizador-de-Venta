const first = document.querySelector("#item");
const div = document.querySelector("#resultado");
const form = document.querySelector("#items-form");

const itempre=document.querySelector("#precioitem");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = "cantidad de items " + first.value+ " precio item "+ itempre.value;

});
