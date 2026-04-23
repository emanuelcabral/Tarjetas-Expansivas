const tarjetas = document.querySelectorAll(".tarjeta");

tarjetas.forEach(tarjeta => {

  // Abrir tarjeta
  tarjeta.addEventListener("click", () => {
    tarjetas.forEach(t => t.classList.remove("activa"));
    tarjeta.classList.add("activa");
  });

  // Botón cerrar
  const botonCerrar = tarjeta.querySelector(".tarjeta__boton-cerrar");

  botonCerrar.addEventListener("click", (e) => {
    e.stopPropagation();
    tarjeta.classList.remove("activa");
  });

});