let body =document.querySelector("body");
let canvasMenu = document.getElementById("canvas-menu");
let menuMobile = document.querySelector(".itens-menu");
let btnCloseCanvas = document.querySelector(".btn-close");

menuMobile.addEventListener('click', function() {
    canvasMenu.classList.toggle("active");
    body.classList.toggle("actived-menu");

});

btnCloseCanvas.addEventListener('click', function() {
    canvasMenu.classList.remove("active");
    body.classList.remove("actived-menu");
});
