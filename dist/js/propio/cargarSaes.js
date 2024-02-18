const datosSaes = [
  {
    img: "../public/images/aes/aes-2.jpg",
    desc: "json-1.jpg",
  },
  {
    img: "../public/images/aes/aes-3.jpg",
    desc: "json-2.jpg",
  },
  {
    img: "../public/images/aes/aes-4.jpg",
    desc: "json-3.jpg",
  },
  {
    img: "../public/images/aes/aes-5.jpg",
    desc: "json-4.jpg",
  },
  {
    img: "../public/images/aes/aes-6.jpg",
    desc: "jsn-5.jpg",
  },
  {
    img: "../public/images/aes/aes-7.jpg",
    desc: "json-6.jpg",
  },
  {
    img: "../public/images/aes/aes-8.jpg",
    desc: "json-7.jpg",
  },
  {
    img: "../public/images/aes/aes-9.jpg",
    desc: "json-8.jpg",
  },
  {
    img: "../public/images/aes/aes-10.jpg",
    desc: "json-9.jpg",
  },
];
const armarSAES = () => {
  console.log(datosSaes);
  const sectionSaes = document.getElementById("grilla-saes");
  const datosHtml = datosSaes
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
var span = document.getElementsByClassName("cerrar")[0];
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
      abrirModal(imagen, parrafo);
    });
  }
};
if (datosSaes.length > 0) {
  armarSAES();
}
