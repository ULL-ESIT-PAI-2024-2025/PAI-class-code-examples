/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 * @desc Tic Tac Toe Example. Step 1
 *       Compile with tsc --target es2015 <source.ts>
 */

const changeToX = function(event: Event): void {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  const container: HTMLElement = event.currentTarget as HTMLElement;
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  container.appendChild(image);    // We add the image child to the div X-clicked element
  container.removeEventListener('click', changeToX);
}

const main = function() {
  const boxes: NodeList = document.querySelectorAll('#grid div')! as NodeList;
  for (const box of boxes) {
    box.addEventListener('click', changeToX);
  }
}

main();
