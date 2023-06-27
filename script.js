const list = document.getElementById("list");
const btn = document.getElementById("btn");
let lista_elementos = Array.from(list.querySelectorAll("li a"));
let tareaInput = document.querySelector("input");
let inputSelect;

let cargaInicial = () => {
  let lista_tareas = JSON.parse(localStorage.getItem("tareas")) || [];

  if (lista_tareas.length > 0) {
    lista_tareas.forEach((tarea) => {
      agregarTarea(tarea);
    });
  }

  document.querySelector("input").focus();
};

tareaInput.addEventListener("change", () => (inputSelect = tareaInput.value));
btn.addEventListener("click", () => agregarTarea());

lista_elementos.forEach((e) => {
  e.addEventListener("click", () => e.remove());
});

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
  //lista_elementos = Array.from(list.querySelectorAll("li a"));
  lista_elementos.push(enlace);
  /*for (i = 0; i < lista_elementos.length; i++) {
    console.log(lista_elementos[i].innerHTML);
  }*/
  let lista_tareas = new Array();

  lista_elementos.forEach((e) => {
    lista_tareas.push(e.innerHTML);
  });
  console.log(lista_tareas);

  localStorage.setItem("tareas", JSON.stringify(lista_tareas));
};

//eliminarTarea = () => {
//  lista_elementos.forEach((e) => {
//    e.addEventListener("click", () => {
//      e.remove();
//    });
//  });
//};
cargaInicial();
