/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 * @description Tic Tac Toe Example. Step 2
 *              Compile with tsc --target es2015 <source.ts>
 */

const changeToX = function(event: Event): void {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const container: HTMLElement = event.currentTarget as HTMLElement;
  const image = document.createElement('img');
  image.src = X_IMAGE_URL;
  container.appendChild(image);
  container.removeEventListener('click', changeToX);
  computerChooseO();
}

const computerChooseO = function(): void {
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  const allBoxes  = document.querySelectorAll('#grid div');
  const freeBoxes = [];
  for (const box of allBoxes) {
    let imageChild = box.querySelector('img');   // Identify boxes without an img inside
    if (!imageChild) {
      freeBoxes.push(box);
    }
  }
  const index = Math.floor(Math.random() * freeBoxes.length);
  const emptyBox = freeBoxes[index];
  const image = document.createElement('img');
  image.src = O_IMAGE_URL;
  emptyBox.removeEventListener('click', changeToX);
  emptyBox.appendChild(image);									// Include an 'O' Image in the empty box
}

const main = function() {
  const boxes: NodeList = document.querySelectorAll('#grid div')! as NodeList;
  for (const box of boxes) {
    box.addEventListener('click', changeToX);
  }
}

main();
