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

/** 
 * @class
 * @description Class to hold the (array of) buttons of the page 
 */
class Menu {
  /** 
   * @description Holds an array of Buttons creat0ed in the Menu constructor 
   *              Class attributes are declared and initialized in constructor
   */
  constructor(private buttonContainer: HTMLElement = document.querySelector('#menu')! as HTMLElement, /** The The DOM element that will host the button */
              private statusBar: HTMLElement = document.querySelector('#status-bar')! as HTMLElement, /** The The DOM element that will host the <h1> text with the button info */
              private buttons: Button[] = [new Button(buttonContainer, 'A'), new Button(buttonContainer, 'B'), new Button(buttonContainer, 'C')]
  ) {
    document.addEventListener('button-clicked', this.showButtonClicked);
  }

  /**
   * @method showButtonClicked
   * @description prints the button changing the DOM
   */
  private showButtonClicked = (event: CustomEvent): void => {
    this.statusBar.textContent = event.detail.buttonName + ' was clicked';
  }
}

/** 
 * @class
 * @description Class for the buttons objects to be placed in tha page 
 */
class Button {
  private containerElement: HTMLElement;  /** The The DOM element that will host the button */
  private text: string = '';              /** The button text */

  /**
   * @description Sets up a button object placing it in the page (DOM)
   *              It set up an event listener for the click event on the button
   *              Notifies Menu when clicked, so that Menu can update the <h1>
   * @param {Element} containerElement - The DOM element that will host the button
   * @param {String} text - Button text
   */
  constructor(containerElement: HTMLElement, text: string) {
    this.containerElement = containerElement;
    this.text = text;
    let button: HTMLButtonElement = document.createElement('button');
    button.textContent = text;
    button.addEventListener('click', this.onClick);
    this.containerElement.append(button);
  }

  /**
   * @method onClick
   * @description Event handler method for click events on the button
   *              It adds an EVENT_INFO object to the customEvent
   */
  private onClick = () => {
    const EVENT_INFO: object = { buttonName: this.text };
    document.dispatchEvent(new CustomEvent('button-clicked', { detail: EVENT_INFO }));
  }
}

function main(): void {
  const menu: Menu = new Menu();
}

main();
