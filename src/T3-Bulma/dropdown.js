/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 24, 2020
 *        Apr 5, 2025
 * @desc Bulma. Components Dropdown menu
 * @see {@link https://bulma.io/documentation/components/dropdown/}
 */
function main() {
    var dropdown = document.querySelector('.dropdown');
    dropdown.addEventListener('click', function (event) {
        event.stopPropagation();
        dropdown.classList.toggle('is-active');
    });
}
main();
