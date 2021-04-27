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
/*
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
} */

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

var modal = document.getElementById('getapp');
var modal2 = document.getElementById('getapp2');
var modal3 = document.getElementById('getapp3');
var modal4 = document.getElementById('getapp4');
var modal5 = document.getElementById('getapp5');
var modal6 = document.getElementById('getapp6');

var btn = (document.getElementById("getapp-button")); 
var btn2 = (document.getElementById("getapp-button-2"));
var btn3 = (document.getElementById("getapp-button-3"));
var btn4 = (document.getElementById("getapp-button-4"));
var btn5 = (document.getElementById("getapp-button-5"));
var btn6 = (document.getElementById("getapp-button-6"));

var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];
var span4 = document.getElementsByClassName("close4")[0];
var span5 = document.getElementsByClassName("close5")[0];
var span6 = document.getElementsByClassName("close6")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}
btn5.onclick = function() {
  modal5.style.display = "block";
}
btn6.onclick = function() {
  modal6.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}
span5.onclick = function() {
  modal5.style.display = "none";
}
span6.onclick = function() {
  modal6.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}*/


    
    
//$('ul.ticker').cycle({ 
  //  fx: 'fade', 
    //speed: 1000
// });
 
 
});