 const datosSaes = [
  {
    img: "./dist/imagenes/aes/aes-2.jpg",
    desc: "json-1.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-3.jpg",
    desc: "json-2.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-4.jpg",
    desc: "json-3.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-5.jpg",
    desc: "json-4.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-6.jpg",
    desc: "jsn-5.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-7.jpg",
    desc: "json-6.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-8.jpg",
    desc: "json-7.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-9.jpg",
    desc: "json-8.jpg",
  },
  {
    img: "./dist/imagenes/aes/aes-10.jpg",
    desc: "json-9.jpg",
  },
]
const encabezados = [
  {
    descripcion: "Proyecto MERN. El backend está construido con NodeJs y Express.JS. Carga las imágenes en el Servicio Cloudinary. La base de Datos MongoDB se aloja en la nube de Mongo: MongoDB Atlas. El Frontend hecho con React, framework CSS Bootstrap. Utiliza React Redux Toolkit para la gestión de la Base de Datos."
  },
  {
    descripcion: "Sencillo proyecto Javascript puro. Uso de la API penweathermap.org."
  },
  {
    descripcion: "Algunas imágenes del sistema SAES. Hacé click sobre ellas para acceder a más detalles."
  }
]

const descZap = document.getElementById('desc-zap'); 
const descClima = document.getElementById('desc-clima'); 
const descSaes = document.getElementById('desc-saes'); 

descZap.innerHTML  = encabezados[0].descripcion;
descClima.innerHTML  = encabezados[1].descripcion;
descSaes.innerHTML = encabezados[2].descripcion;

