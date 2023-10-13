const propiedades_alquiler = [
  {
    nombre: "Apartamento en el centro de la ciudad",
    src: "assets/img/alquiler/1.avif",
    descripcion:
      "Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 1,
    banos: 2,
    costo: 2000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento luminoso con vista al mar",
    src: "https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    descripcion:
      "Este hermoso apartamento ofrece una vista impresionante al mar.",
    ubicacion: "456 Ocean Avenue, Seaside Town, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 2500,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Condominio moderno en zona residencial",
    src: "https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Main Street, Anytown, CA 91234",
    habitaciones: 2,
    banos: 2,
    costo: 2200,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en isla perdida en el oceano",
    src: "assets/img/alquiler/kamehouse.webp",
    descripcion: "Casa en pequeña isla, incluye tortuga e internet",
    ubicacion: "Oceano Indico, Unknown Island, CA 12345",
    habitaciones: 2,
    banos: 2,
    costo: 4000,
    smoke: true,
    pets: true,
  },
];

const propiedades_venta = [
  {
    nombre: "Apartamento de lujo en zona exclusiva",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion:
      "Este elegante condominio moderno está ubicado en una tranquila zona residencial",
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 4,
    banos: 4,
    costo: 5000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Apartamento acogedor en la montaña",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    descripcion:
      "Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas",
    ubicacion: "789 Mountain Road, Summit Peaks, CA 23456",
    habitaciones: 2,
    banos: 1,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo con terraza panorámica",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    descripcion:
      "Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares",
    ubicacion: "567 Skyline Avenue, Skyview City, CA 56789",
    habitaciones: 3,
    banos: 3,
    costo: 4500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa en el fondo del mar",
    src: "assets/img/venta/sponge.webp",
    descripcion: "Casa de piña, buenos vecinos.",
    ubicacion: "333 Bikini Bottom Ave, Bikini Bottom, CA 12345",
    habitaciones: 3,
    banos: 3,
    costo: 20,
    smoke: false,
    pets: true,
  },
];

function formatNumber(number) {
  // Check if the input is not a number
  if (isNaN(number)) {
    return "Invalid Input";
  }

  // Convert the number to a string
  let numberString = number.toString();

  // Split the string into integer and decimal parts (if any)
  const parts = numberString.split(",");

  // Format the integer part with commas
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Join the integer and decimal parts with a dot (if there's a decimal part)
  const formattedNumber = parts.length === 2 ? parts.join(".") : parts[0];

  return formattedNumber;
}

function habitaciones(hab, banos) {
  return `<p>
  <i class="fas fa-bed"></i> ${hab} ${hab > 1 ? "Habitaciones" : "Habitacion"} |
  <i class="fas fa-bath"></i> ${banos} ${banos > 1 ? "Baños" : "Baño"}
</p>`;
}

function smokeAndPets(smoke, pets) {
  return `<p class= ${smoke ? "text-success" : "text-danger"}>
    <i class="fas ${smoke ? "fa-smoking" : "fa-smoking-ban"}"> </i> ${
    smoke ? "Permitido fumar" : "No se permite fumar"
  }
  </p>

  <p class= ${pets ? "text-success" : "text-danger"} >
<i class="fas ${pets ? "fa-paw" : "fa-ban"}"></i> ${
    pets ? "Mascotas permitidas" : "No se permiten mascotas"
  }
</p>`;
}

function cardContent(prop) {
  return `
  <div class="col-md-4 mb-4">
    <div class="card">
      <img
        src="${prop.src}"
        class="card-img-top"
        alt="Imagen del departamento"
      />
      <div class="card-body">
        <h5 class="card-title">
          ${prop.nombre}
        </h5>
        <p class="card-text">
          ${prop.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}
        </p>
        ${habitaciones(prop.habitaciones, prop.banos)}
        <p><i class="fas fa-dollar-sign"></i> ${formatNumber(prop.costo)}</p>
        ${smokeAndPets(prop.smoke, prop.pets)}
      </div>
    </div>
  </div> `;
}

export { propiedades_alquiler, propiedades_venta, cardContent };
