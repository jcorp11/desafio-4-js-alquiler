import { propiedades_venta, cardContent } from "./deptos.js";

const propiedades = document.querySelector("#propiedades");
propiedades_venta.forEach((prop) => {
  propiedades.innerHTML += cardContent(prop);
});
