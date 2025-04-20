/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. Menu and buttons with custom Events
 */

/** @description Class to hold the (array of) buttons of the page */
class Menu {
  /** @private */
  private buttonContainer: HTMLElement; /** The The DOM element that will host the button */
  private statusBar: HTMLElement;       /** The The DOM element that will host the <h1> text with the button info */
  private buttons: Button[];            /** Array of Button objects */

  /** 
   * @constructor 
   * @description Holds an array of Buttons which are created when the Menu is created 
   */
  constructor() {
    this.buttonContainer = document.querySelector('#menu');
    this.statusBar = document.querySelector('#status-bar');
    this.buttons = [
      new Button(this.buttonContainer, 'A'),
      new Button(this.buttonContainer, 'B'),
      new Button(this.buttonContainer, 'C')
    ];
    document.addEventListener('button-click', this.showButtonClicked);
  }

  /**
   * @method
   * @description Console logs and prints the button changing the DOM
   */
  private showButtonClicked = (event) => {
    console.log('Menu notified!');
    const BUTTON_NAME: string = event.currentTarget.textContent;
    this.statusBar.textContent = BUTTON_NAME + ' was clicked';
  }
}

/**
 * @description Class for the buttons objects to be placed in the page
 */
class Button {
  private containerElement;  /** The The DOM element that will host the button */
  private text = '';  /** The button text */

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

  /**
   * @method onClick
   * @description Event handler method for click events on the button
   *              console logs and dispathes the event
   */
  private onClick = () => {
    console.log('clicked: ' + this.text);
    document.dispatchEvent(new CustomEvent('button-click'));
  }
}

function main(): void {
  const menu: Menu = new Menu();
}

main();
