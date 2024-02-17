const cargarDatos = async () => {
  try {
    const URI = "../../../src/jsonsaes.json";
    const respuesta = await fetch(URI);
    if (respuesta.status === 200) {
      const data = await respuesta.json();
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

const sectionSaes = document.getElementById("grilla-saes");
const armarSAES = async () => {
  const datos = await cargarDatos();
  const datosHtml = datos
    .map(
      (dato, index) => `<div class= "g-celda"> 
    <img id='img-${index + 2}' class="img-saes" src='${dato.img}'
    />
   <p class="p-saes"> ${dato.desc}</p>
    </div>`
    )
    .join(" ");
    
  sectionSaes.innerHTML = datosHtml;
  handleModal();
};

var modal = document.getElementById("ventanaModal");
var span  = document.getElementsByClassName("cerrar")[0];
var imgModal = document.getElementById("imgModal");
// el uusario cierre la venta en la cruz //
span.addEventListener("click", function () {
  modal.style.display = "none";
});
// Si el usuario hace clic fuera de la ventana, se cierra.
window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const abrirModal = (imagen, parrafo) => {
  var imgModal = document.getElementById("imgModal");
  var parrModal = document.getElementById("parrafoModal");
  imgModal.setAttribute("src", imagen);
  parrModal.innerHTML = parrafo;
  modal.style.display = "block";
};

const handleModal = () => {
  let divs = document.getElementsByClassName("g-celda");
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      const imagen = divs[i].children[0].attributes[2].nodeValue;
      const parrafo = divs[i].children[1].childNodes[0].nodeValue;
      abrirModal(imagen,parrafo);
    });
  }
};

armarSAES();
