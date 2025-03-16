/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 16, 2025
 * @description Array length property
 *       - The length property automatically updates when we modify the array. 
 *       - It is actually not the count of values in the array, but the greatest numeric index plus one.
 *
 *       - The length property is that it’s writable.
 *       - If we increase the length, nothing interesting happens. 
 *       - But if we decrease it, the array is truncated. The process is irreversible
 * @see {@link https://javascript.info/array#a-word-about-length}
 */

export function main(): void { 
  let fruits = [];
  fruits[123] = 'Apple';
  console.log(fruits.length ); // 124


  let numbers = [1, 2, 3, 4, 5];
  numbers.length = 2;   // truncate to 2 elements
  console.log(numbers); // [1, 2]

  numbers.length = 5;      // return length back
  console.log(numbers[3]); // undefined: the values do not return
}

main();
