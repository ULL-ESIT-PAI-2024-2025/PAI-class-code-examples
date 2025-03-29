/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example
 *              Event objects
 *              When the image is clicked, the openPresent function will be executed with 
 *              the appropriate event object passed to it automatically by the event system. 
 */

function openPresent(event: Event): void {
  let image: HTMLImageElement = event.currentTarget as HTMLImageElement;
  image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
  image.removeEventListener('click', openPresent);
  return;
}

function main(): void {
  const image: HTMLImageElement = document.querySelector('img')! as HTMLImageElement;
  image.addEventListener('click', openPresent);
}

main();
