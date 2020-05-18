/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc Events. OO Present. Multiple Presents. Two classes: App and Present
*/

"use strict";

class Present {
  constructor(containerElement, presentSrc) {
    this.containerElement = containerElement;
    this.presentSrc = presentSrc;

    // Bind event listeners.
    this._openPresent = this._openPresent.bind(this);

    // Create image and append to container.
    this.image = document.createElement('img');
    this.image.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/gift-icon.png';
		this.image.addEventListener('click', this._openPresent);
    this.containerElement.append(this.image);
  }

  _openPresent(event) {
    this.image.src = this.presentSrc;
  	this.image.removeEventListener('click', this._openPresent);
  }
}
