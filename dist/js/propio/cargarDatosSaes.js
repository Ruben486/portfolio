const cargarDatos = async () => {
    try {
      const URI = "jsonsaes.json";
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
  
  const armarHtml = async () => {
    const datos = await cargarDatos();
    const datosHtml = datos.map(
      (dato, index) => `<div class= "g-celda"> 
      <img id='img-${index + 2}' class="img-saes" src='${dato.img}'
      />
     <p class="p-saes"> ${dato.desc}</p>
      </div>`
    ).join(' ');
    sectionSaes.innerHTML = datosHtml;
  };
  armarHtml();
  