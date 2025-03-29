/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example - changing the message in the present 2nd page
 */
function openPresent(event) {
    var image = event.currentTarget;
    image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
    var title = document.querySelector('h1');
    title.textContent = 'Bingo!';
    image.removeEventListener('click', openPresent);
}
function main() {
    var image = document.querySelector('img');
    image.addEventListener('click', openPresent);
}
main();
