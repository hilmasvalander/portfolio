$(document).ready(function() {

//scroll button
window.onscroll = function() {scrollFunction()};  

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("top-button").style.display = "block";
  } else {
    document.getElementById("top-button").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} // end scroll button
    

// Modal 1
var modal = document.getElementById('getapp');
var btn = document.getElementById("getapp-button");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Modal 2
var modal = document.getElementById('getapp2');
var btn = document.getElementById("getapp-button-2");
var span = document.getElementsByClassName("close2")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
 
  /*  
$('ul.ticker').cycle({ 
    fx: 'fade', 
    speed: 1000
 });*/
 
 
});