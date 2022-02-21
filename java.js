// alert("Bienvenid@ a Los Favoritos")

// NETFLIX
window.addEventListener('load', iniciar1, false);

function iniciar1() {
  
  var imagen = document.getElementById('netflix');
  
  imagen.addEventListener('mouseover', peligro1, false);
  imagen.addEventListener('mouseout', restaurar1, false);
}

function restaurar1(){
  var imagen = document.getElementById('netflix').src = "img/netflix.jpeg";
}

function peligro1() {
  var imagen = document.getElementById('netflix').src = "img/netflix1.jpeg";
}

// DISNEY
window.addEventListener('load', iniciar2, false);

function iniciar2() {
  
  var imagen = document.getElementById('disney');
  
  imagen.addEventListener('mouseover', peligro2, false);
  imagen.addEventListener('mouseout', restaurar2, false);
}

function restaurar2(){
  var imagen = document.getElementById('disney').src = "img/disney.jpeg";
}

function peligro2() {
  var imagen = document.getElementById('disney').src = "img/disney1.jpeg";
}

// MAGIS
window.addEventListener('load', iniciar3, false);

function iniciar3() {
  
  var imagen = document.getElementById('magis');
  
  imagen.addEventListener('mouseover', peligro3, false);
  imagen.addEventListener('mouseout', restaurar3, false);
}

function restaurar3(){
  var imagen = document.getElementById('magis').src = "img/magis.jpeg";
}

function peligro3() {
  var imagen = document.getElementById('magis').src = "img/magis1.jpeg";
}

// STAR
window.addEventListener('load', iniciar4, false);

function iniciar4() {
  
  var imagen = document.getElementById('star');
  
  imagen.addEventListener('mouseover', peligro4, false);
  imagen.addEventListener('mouseout', restaurar4, false);
}

function restaurar4(){
  var imagen = document.getElementById('star').src = "img/star.jpeg";
}

function peligro4() {
  var imagen = document.getElementById('star').src = "img/star1.jpeg";
}

// PRIME
window.addEventListener('load', iniciar5, false);

function iniciar5() {
  
  var imagen = document.getElementById('prime');
  
  imagen.addEventListener('mouseover', peligro5, false);
  imagen.addEventListener('mouseout', restaurar5, false);
}

function restaurar5(){
  var imagen = document.getElementById('prime').src = "img/prime.jpeg";
}

function peligro5() {
  var imagen = document.getElementById('prime').src = "img/prime1.jpeg";
}

// ECDF
window.addEventListener('load', iniciar6, false);

function iniciar6() {
  
  var imagen = document.getElementById('ecdf');
  
  imagen.addEventListener('mouseover', peligro6, false);
  imagen.addEventListener('mouseout', restaurar6, false);
}

function restaurar6(){
  var imagen = document.getElementById('ecdf').src = "img/ecdf.jpeg";
}

function peligro6() {
  var imagen = document.getElementById('ecdf').src = "img/ecdf1.jpeg";
}

// HBO
window.addEventListener('load', iniciar7, false);

function iniciar7() {
  
  var imagen = document.getElementById('hbo');
  
  imagen.addEventListener('mouseover', peligro7, false);
  imagen.addEventListener('mouseout', restaurar7, false);
}

function restaurar7(){
  var imagen = document.getElementById('hbo').src = "img/hbo.jpeg";
}

function peligro7() {
  var imagen = document.getElementById('hbo').src = "img/hbo1.jpeg";
} 