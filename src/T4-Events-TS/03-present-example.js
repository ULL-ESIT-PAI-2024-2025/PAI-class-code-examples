/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example
 *              The openPresent listener function replaces the URL of the image shown
 *              in the HTML code (which selector is "img")
 */
/** @description Listener function */
var openPresent = function () {
    var image = document.querySelector('img');
    var NEW_IMAGE_URL = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
    image.src = NEW_IMAGE_URL;
    image.removeEventListener('click', openPresent);
    return;
};
var main = function () {
    var image = document.querySelector('img');
    image.addEventListener('click', openPresent);
};
main();
