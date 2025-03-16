/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 2, 2023
 * @description Looping over arrays
 *       - The for..of doesn’t give access to the number of the current element, just its value, but in most cases that’s enough. And it’s shorter.
 *       - Technically, because arrays are objects, it is also possible to use for..in, But that’s actually a bad idea. There are potential problems with it:
 * @see {@link https://javascript.info/array#loops}
 */

export function main(): void { 
  let array: (string | number)[] = ['PAI', 3, 'CyA', 2, 'IB', 1];
  const LINE: string = '============================';

  // Classical for loop
  for (let i = 0; i < array.length; ++i) {
    console.log(array[i]);
  }
  console.log(LINE);
  // Classical for loop, caching length
  for (let i = 0, cLength: number = array.length; i < cLength; ++i) {
    console.log(array[i]);
  }
  console.log(LINE);
  // for-of PREFERRED
  for (const element of array) {
    console.log(element);
  }
  console.log(LINE);
  // forEach
  array.forEach(element => console.log(element));
  console.log(LINE);
  // for-in Not a good idea...
  for (let i in array) {
    console.log(array[i]);
  }
}

main();
