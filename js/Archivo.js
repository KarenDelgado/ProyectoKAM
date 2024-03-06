function cambiarClase(){
    let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
    let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');    
}

function displayDate() {
   document.getElementById("fecha").innerHTML = Date();
}

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

function soloNumeros(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toUpperCase();
 letras = "0123456789";
 especiales = "8-37-39-46";
 tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
           tecla_especial = true;
           break;
        }
    }
  if(letras.indexOf(tecla)==-1 &&
     !tecla_especial){
           return false;
       }
}

function soloLetras(e){
 key = e.keyCode || e.which;
 tecla = String.fromCharCode(key).toUpperCase();
 letras = " ÁÉÍÓÚABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
 especiales = "8-37-39-46";
 tecla_especial = false;
    for(var i in especiales){
        if(key == especiales[i]){
           tecla_especial = true;
           break;
        }
    }
  if(letras.indexOf(tecla)==-1 &&
     !tecla_especial){
           return false;
       }
}

function valida_correo(){
var campo=document.getElementById('correo').value;
var valido = document.getElementById('emailOK');
estado=true;

if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(campo)) 
      {
        valido.innerText = "Incorrecto";
        estado=false;
      }
else{
   valido.innerText = "";
 }
return estado;      
}

function carga_estados(){
  var estados=["Aguascalientes","Baja California",
  "Baja California Sur","Campeche","Colima","Puebla",
  "Guerrero","Morelos","Tlaxcala","Veracruz",
  "Ciudad de México","Estado de México","Querétaro"];
  estados.sort();
 for(var i in estados)
  {
   	document.getElementById("estado").innerHTML +=
   "<option value='"+estados[i]+"'>"+estados[i]+
   "</option>";
  }
}

function removeOptions(selectbox)
{
    var i;
    for(i = selectbox.options.length - 1 ; i >= 0 ; i--)
      selectbox.remove(i);
}


function carga(){
	document.getElementById('demo').style.fontSize='25px'
	document.getElementById('demo').innerHTML = "Muchas gracias. El formulario se ha enviado con exito."
}

