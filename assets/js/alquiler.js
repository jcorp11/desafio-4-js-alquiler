import { propiedades_alquiler, cardContent } from "./deptos.js";

const propiedades = document.querySelector("#propiedades");
propiedades_alquiler.forEach((prop) => {
  propiedades.innerHTML += cardContent(prop);
});
