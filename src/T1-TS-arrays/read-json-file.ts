
/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 19, 2023
 * @description Read a JSON object from file
 *              Play play with the program by commenting out and uncommenting the lines in the main() function
 */

import * as data from './country-by-abbreviation.json';

const main = function (): void {
  // console.log(typeof(data));  
  // console.log(data);  
  for (const datum of data) {
    console.log(datum.country, datum.abbreviation);
  }
}

main();
