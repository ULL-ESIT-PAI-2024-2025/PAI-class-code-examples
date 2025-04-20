/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. OO On click to console
*/

/**
 * @class
 * @description Class for the objects buttons to be placed in tha page
 * @property {HTMLElement} containerElement - The The DOM element that will host the button 
 * @property {string} text - The button text
 */
class Button {
  private containerElement: HTMLElement;  
  private text: string = '';             

  /**
   * @constructor
   * @description Sets up a button object placing it in the page (DOM)
   *              It set up an event listener for the click event on the button
   * @param containerElement - The DOM element that will host the button
   * @param text - Button text
   */
  constructor(containerElement: HTMLElement, text: string) {
    this.containerElement = containerElement;
    this.text = text;

    this.onClick = this.onClick.bind(this);

    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.containerElement.append(button);
  }

  /**
   * @method
   * @description Event handler method for click events on the button
   */
  private onClick(): void {
    console.log('clicked: ' + this.text);
  }

  /**
   * @method
   * @description Event handler method for click events on the button
   *              Implemented as an arrow function
   *              Using this version we don't need the bind statement in the constructor
   */
  private onClickArrow = (): void => {
    console.log('Arrow clicked: ' + this.text);
  }
}

function main(): void {
  const buttonContainer: HTMLElement = document.querySelector('#menu')! as HTMLElement;
  const button1 = new Button(buttonContainer, 'A');
  const button2 = new Button(buttonContainer, 'B');
  const button3 = new Button(buttonContainer, 'C');
}

main();
