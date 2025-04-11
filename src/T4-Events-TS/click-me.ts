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
 *       It is the "non-null assertion operator" and asserts that the returned value is non-null.
 *       By adding ! after an expression, you are telling TypeScript to trust that the value will 
 *       not be null or undefined at that point in the code. 
 *       This is useful when you are sure the element exists, but TypeScript cannot guarantee it 
 *       due to the nature of the method used (such as querySelector).
 *       
 * @see {@link https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-0.html#non-null-assertion-operator}
 * @see {https://medium.com/@bobjunior542/how-to-use-the-operator-in-typescript-for-cleaner-more-efficient-code-7fd528f8f8b1}
 * @see HTML Event Handling in TypeScript {@link https://medium.com/geekculture/html-event-handling-in-typescript-b9ca7178d912}
 */

/** 
 * @description Listener function. Executes when button is clicked
 *              When executed prints a message in console 
 */
const onClick = function(): void { 
  console.log('Executing the event listener: Button has been clicked');
  return;
};

/** The HTMLButtonElement can be ommited in the declaration and inferred by the TS compiler */
const main = function () {
  const button: HTMLButtonElement = document.querySelector('button')! as HTMLButtonElement;
  button.addEventListener('click', onClick);
};

main();
