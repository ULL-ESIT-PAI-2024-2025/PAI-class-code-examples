/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. Buttons Menu example
 *              Using 2 classes:
 *              Menu: 
 *                Has an array of Buttons
 *              Button:
 *                console.log when clicked
 *              DISCLAIMER: This code is written this way for conciseness: 
 *                          the correct way would be to use a different file for each class.
*/

/** @description Class to hold the (array of) buttons of the page */
class Menu {
  private buttonContainer: HTMLElement; /** The The DOM element that will host the button */
  private buttons: Button[];            /** Array of button objects */
  /** @description Holds an array of Buttons which are created when the Menu is created */
  constructor() {
    this.buttonContainer = document.querySelector('#menu')! as HTMLElement;
    this.buttons = [
      new Button(this.buttonContainer, 'A'),
      new Button(this.buttonContainer, 'B'),
      new Button(this.buttonContainer, 'C')
    ];
  }
}

/** @description Class for the objects buttons to be placed in tha page */
class Button {
  private containerElement: HTMLElement;  /** The DOM element that will host the button */
  private text: string = '';              /** button text */
  /**
   * @description Sets up a button object placing it in the page (DOM)
   *              It set up an event listener for the click event on the button
   *              Notifies Menu when clicked, so that Menu can update the <h1>
   * @param containerElement - The DOM element that will host the button
   * @param text - Button text
   */
  constructor(containerElement: HTMLElement, text: string) {
    this.containerElement = containerElement;
    this.text = text;
    const button: HTMLButtonElement = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.containerElement.append(button);
  }

  private onClick = (): void => {
    console.log('clicked: ' + this.text);
  }
}

const menu = new Menu();   // When the page loads we create the Menu
