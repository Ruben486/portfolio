// manejo de la Modal
// Hace referencia al elemento <span> que tiene la X que cierra la ventana
var modal = document.getElementById("ventanaModal");
var span = document.getElementsByClassName("cerrar")[0];

const abrirModal = (imagen,parrafo) => {
  // asignar a la imagen de la modal la imagen correpondiente//
  // asignar al parrafo de la modal el correspondiente
  var imgModal = document.getElementById("imgModal");
  var parrModal = document.getElementById("parrafoModal");
  imgModal.setAttribute("src", imagen);
  parrModal.innerHTML = parrafo;
  modal.style.display = "block";
  span.addEventListener("click", function () {
    modal.style.display = "none";
  });
  // Si el usuario hace clic fuera de la ventana, se cierra.
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};


let divs = document.getElementsByClassName("g-celda");
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function () {
    imagen = divs[i].children[0].attributes[2].nodeValue;
    parrafo = divs[i].children[1].childNodes[0].nodeValue;
    abrirModal(imagen, parrafo);
  });
};

