document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const respuesta = document.getElementById("respuesta");

  if (!nombre || !email || !mensaje) {
    respuesta.textContent = "Por favor completa todos los campos.";
    respuesta.style.color = "red";
  } else {
    respuesta.textContent = "¡Gracias por tu mensaje!";
    respuesta.style.color = "green";
    this.reset();
  }
});

const formWrapper = document.querySelector(".formbold-form-wrapper");
const crossIcon = document.querySelector(".cross-icon");
const chatIcon = document.querySelector(".chat-icon");
function chatboxToogleHandler() {
  formWrapper.classList.toggle("hidden");
  crossIcon.classList.toggle("hidden");
  chatIcon.classList.toggle("hidden");
}


