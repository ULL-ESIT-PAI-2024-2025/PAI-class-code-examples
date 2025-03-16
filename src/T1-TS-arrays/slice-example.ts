/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @desc slice example
 *       The slice() method of Array instances returns a shallow copy of a portion of an array into a new array 
 *       object selected from start to end (end not included) where start and end represent the index of items in that array. 
 *       The original array will not be modified.
 * @see @link{https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice}
 */

export function main(): void { 
  let myArray: number[] = [2, 4, 6, 8];

  console.log(myArray.slice());     // →  [ 2, 4, 6, 8 ]
  console.log(myArray.slice(1));    // →  [ 4, 6, 8 ]
  console.log(myArray.slice(1, 3)); // →  [ 4, 6 ]
  console.log(myArray.slice(-1));   // →  [ 8 ]
  console.log(myArray);             // →  [ 2, 4, 6, 8 ]
}

main();
