const images = document.querySelectorAll(".skills-li")
function triggerAnimation(entries) {
  entries.forEach(entry => {
    const image = entry.target.querySelector(".skill-box")
    image.classList.toggle('unset',entry.isIntersecting)
  })
};

const proyectos = document.querySelectorAll(".proy-card");

function triggerAnimation2(entries) {
  entries.forEach(entry => {
    const cardProyecto = entry.target.querySelector(".card-box")
    cardProyecto.classList.toggle('unset',entry.isIntersecting)
  })
};

const options = {
  // contenedor o area visible //
  // rootmargin es el alcance el contenedor especificado //
  // threslod: umbral para ser considerado visible 1: el elmento debe estar completamente dentro del contenedor//
  root: null,
  rootMargin: "10px",
  threshold: 0
};

const observer = new IntersectionObserver(triggerAnimation,options);
images.forEach(image => {
  observer.observe(image)
});

const proy_obs = new IntersectionObserver(triggerAnimation2,options);
proyectos.forEach(proyecto => {
  proy_obs.observe(proyecto)
});