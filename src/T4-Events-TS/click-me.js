/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2023
 * @desc Button event listener
 *       Note the use of the Non-null assertion operator:
 *       The call to document.querySelector('button')! // (note the ! in the expression)
 *       asserts that the returned value is non-null
 *
 * @see {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator}
 * @see HTML Event Handling in TypeScript {@link https://medium.com/geekculture/html-event-handling-in-typescript-b9ca7178d912}
 */
/**
 * @description Listener function. Executes when button is clicked
 *              When executed prints a message in console
 */
var onClick = function () {
    console.log('Executing the event listener: Button has been clicked');
    return;
};
/** The HTMLButtonElement can be ommited in the declaration and inferred by the TS compiler */
var main = function () {
    var button = document.querySelector('button');
    button.addEventListener('click', onClick);
};
main();
