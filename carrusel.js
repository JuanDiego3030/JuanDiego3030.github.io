// funcinamiento del slider
const slider = document.querySelector("#slider");
const sliderSection = document.querySelectorAll(".slider__section");
const sliderSectionLast = sliderSection[sliderSection.length - 1];

const btnLeft = document.querySelector("#btn-l");
const btnRight = document.querySelector("#btn-r");

slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// botones del slider
function moverDerecha() {
  const sliderSectionFirst = document.querySelector(".slider__section");

  slider.style.marginLeft = "-200%";
  slider.style.transition = "margin-left 0.5s";

  setTimeout(function() {
    slider.style.transition = "none";
    slider.style.marginLeft = "-100%";
    slider.insertAdjacentElement("beforeend", sliderSectionFirst);
  }, 500);
}

function moverIzquierda() {
  const sliderSectionLast = document.querySelector(".slider__section:last-child");

  slider.style.marginLeft = "0%";
  slider.style.transition = "margin-left 0.5s";

  setTimeout(function() {
    slider.style.transition = "none";
    slider.style.marginLeft = "-100%";
    slider.insertAdjacentElement("afterbegin", sliderSectionLast);
  }, 500);
}

btnRight.addEventListener("click", moverDerecha);

btnLeft.addEventListener("click", moverIzquierda);

// Funcionamiento de las animaciones de los titulos
var sections = document.querySelectorAll('section');

sections.forEach(function(section) {
  var heading = section.querySelector('h1');

  section.addEventListener('mouseover', function() {
    if (section.id === 'Suzuki') {
      heading.style.color = 'yellow';
    } else if (section.id === 'Honda') {
      heading.style.color = 'red';
    } else if (section.id === 'Kawasaki') {
      heading.style.color = 'green';
    } else if (section.id === 'Yamaha') {
      heading.style.color = 'blue';
    }
    heading.classList.add('grow-animation');
  });

  section.addEventListener('mouseout', function() {
    heading.style.color = ''; 
    heading.classList.remove('grow-animation');
  });
});

var formulario = document.getElementById('formulario-contacto');
var mensajePopup = document.getElementById('mensaje-popup');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío predeterminado del formulario
  mensajePopup.classList.remove('oculto'); // Mostrar el mensaje pop-up
});

mensajePopup.addEventListener('click', function() {
  mensajePopup.classList.add('oculto'); // Ocultar el mensaje pop-up al hacer clic en él
});

document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtén los campos del formulario
  var nombreApellidoInput = document.getElementById("nombreApellido");
  var emailInput = document.getElementById("email");
  var mensajeInput = document.getElementById("mensaje");

  // Realiza las acciones necesarias con los datos del formulario (enviar mensaje, mostrar mensaje de confirmación, etc.)

  // Borra los campos del formulario
  nombreApellidoInput.value = "";
  emailInput.value = "";
  mensajeInput.value = "";

  // Muestra el mensaje de confirmación
  document.getElementById("mensaje-popup").classList.remove("oculto");

  // Oculta el mensaje de confirmación después de 4 segundos
  setTimeout(function() {
    document.getElementById("mensaje-popup").classList.add("oculto");
  }, 4000);
});