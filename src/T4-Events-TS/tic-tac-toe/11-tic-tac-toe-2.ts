/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 * @description Tic Tac Toe Example. Step 2. Better(?) approach: Global Variable
 *              Compile with tsc --target es2015 <source.ts>
 */

const changeToX = function(event: Event): void {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const container: HTMLElement = event.currentTarget as HTMLElement;
  const image = document.createElement('img');

  image.src = X_IMAGE_URL;
  container.appendChild(image);
  container.removeEventListener('click', changeToX);
  
  // Update freeBoxes by removing the container 
  const indexToRemove = freeBoxes.indexOf(container);
  if (indexToRemove !== -1) {
    freeBoxes.splice(indexToRemove, 1);
  }
  computerChooseO();
}

const computerChooseO = function(): void {
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  if (freeBoxes.length === 0) {
    console.log('The game is over - no free boxes left');
    return;
  }
  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];
  freeBoxes.splice(index, 1); // Remove the chosen box from freeBoxes
  const image = document.createElement('img');
  image.src = O_IMAGE_URL;
  freeSpace.removeEventListener('click', changeToX);
  freeSpace.appendChild(image);
}

let freeBoxes: HTMLElement[] = []; // Global array

const main = function() {
  let boxes = document.querySelectorAll('#grid div');
  for (const box of boxes) {
    box.addEventListener('click', changeToX);
    freeBoxes.push(box as HTMLElement);
  }
}

main();
