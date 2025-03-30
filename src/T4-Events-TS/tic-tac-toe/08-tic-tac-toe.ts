/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 * @description Tic Tac Toe Example. Initial Code
 *              Compile with tsc --target es2015 <source.ts>
 */

const onClick = function(event: Event): void {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  const element: HTMLElement = event.target as HTMLElement;   // Get the element that was clicked

  // Create an <img> tag with the X img src and append it to the element
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  element.appendChild(image);
}

const main = function() {
  // All elements that have grid and div (all divs)
  const gridItems: NodeList = document.querySelectorAll('#grid div') as NodeList;
  for (const item of gridItems) {
    item.addEventListener('click', onClick);
  }
}

main();
