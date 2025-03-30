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

const HUMAN = 'x';
const COMPUTER = 'o';

/** 
  * @desc Assigns an empty box to an owner 
  *       Registers the assignation on the takenBoxes global array
  *       Deletes the box from the freeBoxes global array
  * @param {object} emptyBox. The HTML Element that represents the Box (it is a div)
  * @param {string} owner It can be HUMAN or COMPUTER 
  */
const assignBox = function(emptyBox: HTMLElement, owner: string) {
  const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
  const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';
  let image = document.createElement('img');
  image.src = (owner === HUMAN) ? X_IMAGE_URL : O_IMAGE_URL;
  emptyBox.appendChild(image);

  takenBoxes[emptyBox.id] = owner;
  const indexToRemove = freeBoxes.indexOf(emptyBox);
  freeBoxes.splice(indexToRemove, 1);
  emptyBox.removeEventListener('click', changeToX);
}

const changeToX = function(event: Event) {
  assignBox(event.currentTarget as HTMLElement, HUMAN);
  if (isGameOver()) {
    displayWinner();
  } else {
    computerChooseO();
  }
}

const computerChooseO = function() {
  const index = Math.floor(Math.random() * freeBoxes.length);
  const freeSpace = freeBoxes[index];

  assignBox(freeSpace, COMPUTER);

  if (isGameOver()) {
    displayWinner();
  }
}

const isGameOver = function() {
  return freeBoxes.length === 0 || getWinner() !== null;
}

const displayWinner = function() {
  const winner = getWinner();

  const resultContainer = document.querySelector('#results');
  const header = document.createElement('h1');
  if (winner === HUMAN) {
    header.textContent = 'You win!';
  } else if (winner === COMPUTER){
    header.textContent = 'Computer wins';
  } else {
    header.textContent = 'Tie';
  }
  resultContainer.appendChild(header);

  // Remove remaining event listeners
  for (const box of freeBoxes) {
    box.removeEventListener('click', changeToX);
  }
}

const checkBoxes = function(one, two, three) {
  if (takenBoxes[one] !== undefined &&
      takenBoxes[one] === takenBoxes[two] &&
      takenBoxes[two] === takenBoxes[three]) {
    return takenBoxes[one];
  }
  return null;
}

// Returns HUMAN, COMPUTER, or null for no winner yet.
const getWinner = function() {
  // Check rows
  let rowResult = checkBoxes('one', 'two', 'three') ||
      checkBoxes('four', 'five', 'six') ||
      checkBoxes('seven', 'eight', 'nine');

  // Check columns
  let colResult = checkBoxes('one', 'four', 'seven') ||
      checkBoxes('two', 'five', 'eight') ||
      checkBoxes('three', 'six', 'nine');

  // Check diagonal
  let diagonalResult = checkBoxes('one', 'five', 'nine') ||
      checkBoxes('three', 'five', 'seven');
  return rowResult || colResult || diagonalResult;
}

let freeBoxes = [];
// Map of box number -> HUMAN or COMPUTER
let takenBoxes = {};

const main = function() {
  const boxes: NodeList = document.querySelectorAll('#grid div')! as NodeList;
  for (const box of boxes) {
    box.addEventListener('click', changeToX);
    freeBoxes.push(box);
  }
}

main();
