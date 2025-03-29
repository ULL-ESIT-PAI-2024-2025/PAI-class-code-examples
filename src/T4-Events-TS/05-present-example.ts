/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @description Present Example - changing the message in the present 2nd page
 *              The code modifies the textContent attribute of the h1 element, 
 *              thereby changing the title of the page.
 */

function openPresent(event: Event): void {
  let image: HTMLImageElement = event.currentTarget as HTMLImageElement;
  image.src = 'https://media.giphy.com/media/27ppQUOxe7KlG/giphy.gif';
  let title: HTMLHeadingElement = document.querySelector('h1')! as HTMLHeadingElement;
  title.textContent = 'Bingo!';
  image.removeEventListener('click', openPresent);
}

function main(): void {
  const image: HTMLImageElement = document.querySelector('img')! as HTMLImageElement;
  image.addEventListener('click', openPresent);
}

main();
