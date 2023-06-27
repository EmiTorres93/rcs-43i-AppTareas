const list = document.getElementById("list");
const btn = document.getElementById("btn");
let lista_elementos = Array.from(list.querySelectorAll("li a"));

let tareaInput = document.querySelector("input");
let inputSelect;
tareaInput.addEventListener("change", () => (inputSelect = tareaInput.value));

btn.addEventListener("click", () => agregarTarea());

lista_elementos.forEach((e) => {
  e.addEventListener("click", () => e.remove());
});

//list.addEventListener("click", () => eliminarTarea());

let agregarTarea = () => {
  //console.log(inputSelect);
  let nuevaTarea = document.createElement("li");
  let enlace = document.createElement("a");
  let contenido = document.createTextNode(inputSelect);

  enlace.appendChild(contenido);
  enlace.setAttribute("href", "#");
  enlace.className = "py-3";
  nuevaTarea.appendChild(enlace);
  list.appendChild(nuevaTarea);
  tareaInput.value = " ";
  enlace.addEventListener("click", () => enlace.remove());
  //lista_elementos.forEach((li) => console.log(li.innerHTML));
};

//eliminarTarea = () => {
//  lista_elementos.forEach((e) => {
//    e.addEventListener("click", () => {
//      e.remove();
//    });
//  });
//};
