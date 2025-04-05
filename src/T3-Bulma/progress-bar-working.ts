/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 24, 2020
 *        Apr 5, 2025
 * @desc Bulma. Progress Bar
 * @see {@link https://www.w3schools.com/howto/howto_js_progressbar.asp}
 * 
 */

function move(): void {
  let counter = 0;

  if (counter === 0) {
    counter = 1;
    const elem = document.getElementById("myBar") as HTMLElement;
    let width = 0;
    const id = setInterval(frame, 10);

    function frame(): void {
      if (width >= 100) {
        clearInterval(id);
        counter = 0;
      } else {
        width++;
        elem.style.width = width + "%";
        elem.innerHTML = width + "%";
      }
    }
  }
}

