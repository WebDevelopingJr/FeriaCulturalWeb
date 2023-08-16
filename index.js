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

let cartasAdicionales2 = document.getElementById("cart2")
let cartasAdicionales3 = document.getElementById("cart3")
let cartasAdicionales4 = document.getElementById("cart4")

let cartas = document.querySelector(".content") 
cartas.addEventListener("click", ()=>{
    cartas.classList.toggle("CartasInfo")
    cartasAdicionales2.classList.remove("CartasInfo")
    cartasAdicionales3.classList.remove("CartasInfo")
    cartasAdicionales4.classList.remove("CartasInfo")
});
cartasAdicionales2.addEventListener("click", ()=>{
    cartas.classList.remove("CartasInfo")
    cartasAdicionales2.classList.toggle("CartasInfo")
    cartasAdicionales3.classList.remove("CartasInfo")
    cartasAdicionales4.classList.remove("CartasInfo")

})
cartasAdicionales3.addEventListener("click", ()=>{
    cartas.classList.remove("CartasInfo")
    cartasAdicionales3.classList.toggle('CartasInfo')
    cartasAdicionales2.classList.remove("CartasInfo")
    cartasAdicionales4.classList.remove("CartasInfo")
})
cartasAdicionales4.addEventListener("click",()=>{
    cartas.classList.remove("CartasInfo")
    cartasAdicionales4.classList.toggle("CartasInfo")
    cartasAdicionales2.classList.remove("CartasInfo")
    cartasAdicionales3.classList.remove("CartasInfo")

})
