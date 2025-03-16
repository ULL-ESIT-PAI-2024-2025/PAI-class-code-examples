/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 16, 2025
 * @description for-in loops in TS
 *              Avoid using for...in in TypeScript. 
 *              It’s unfortunately legal syntax, but it does a very different thing than you expect. 
 * @see {@link https://stackoverflow.com/questions/500504/why-is-using-for-in-for-array-iteration-a-bad-idea}
 */

export function main(): void { 
  let array: number[] = [];
  array[5] = 5;  // resizes the array
  for (const element of array) {  // Prints 5 elements of the array
    console.log(element);
  }

  for (let index in array) {  // // Shows only the explicitly set index of "5", and ignores 0-4
    console.log(array[index]);
  }
}

main();
