/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Mar 5, 2023
 * @desc Callback example
 *       Function callback passed as param to mySandwidh is a callback
 *       The callback executes at the end of mySandwich call
 * @see {@link https://stackoverflow.com/a/40407344}
 */

/**
  * Used to define the callback type
  * This could be alternatively achieved with a type definition:
  *   type Printer = (message: string) => void;
  */
interface Printer {
  (message: string): void;
}


/** @desc The callback function. Implements the Printer interface */
function printer(message: string): void {
  console.log(message);
}

/** @desc function using a callback as a parameter */
function mySandwich(ingredient1: string, ingredient2: string, callback: Printer) {
  console.log('Started eating my sandwich.\n\nIt has: ' + ingredient1 + ', ' + ingredient2);
  callback('Finished eating my sandwich.');
}

export function main(): void { 
  // Call to function passing a callback
  mySandwich('ham', 'cheese', printer);
}

main();
