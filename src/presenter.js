const first = document.querySelector("#item");
const div = document.querySelector("#resultado");
const form = document.querySelector("#items-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  div.innerHTML = "<p>" + first.value+ "</p>";
});
