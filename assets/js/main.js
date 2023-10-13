import {
  propiedades_alquiler,
  propiedades_venta,
  cardContent,
} from "./deptos.js";

const ventaContainer = document.querySelector("#containerVenta");
const alquilerContainer = document.querySelector("#containerAlquiler");

for (let i = 0; i < 3; i++) {
  ventaContainer.innerHTML += cardContent(propiedades_venta[i]);
  alquilerContainer.innerHTML += cardContent(propiedades_alquiler[i]);
}
