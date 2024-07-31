let w = window.innerWidth;

function openNav() {
   w = window.innerWidth;
   ancho = "100%";

   if(w > 500){
    ancho = "50%";
   }
    document.getElementById("myNav").style.width = ancho;
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  document.addEventListener('DOMContentLoaded', function() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        });
}); 