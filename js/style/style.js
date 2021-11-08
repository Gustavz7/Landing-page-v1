
/* Logica CARRUSEL*/
const carrusel_items = document.querySelector('.carrusel-items')
const point = document.querySelectorAll('.point')

point.forEach((cadaPunto, i) =>{
    point[i].addEventListener('click', () =>{
        let posicion = i
        let operacion = posicion * -20
        carrusel_items.style.transform = `translateX(${ operacion }%)`
        point.forEach((cadaPunto, i) => {
            point[i].classList.remove('activo')
        })
        point[i].classList.add('activo')
    })
})

document.querySelector(".bars").addEventListener("click", () => {
    document.querySelector(".nav-box").classList.toggle("show-nav-box");
  });