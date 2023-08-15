const boton = document.querySelector(".menu-imagen");
const menu = document.querySelector(".menu");
boton.addEventListener("click", ()=>{
    menu.classList.toggle("menu-activo");
});

boton.addEventListener("click", ()=>{
    boton.classList.toggle("girar")
    boton.setAttribute('href', 'worldwide_814513.png');
})

let menuScroll = document.querySelector("#nav-bar")
window.addEventListener("scroll",(e)=>{
   menuScroll.classList.toggle("menuScroll", window.scrollY>0);
});