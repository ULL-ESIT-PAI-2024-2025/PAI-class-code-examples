/**
  * Universidad de La Laguna
	* Escuela Superior de Ingeniería y Tecnología
	* Grado en Ingeniería Informática
	* Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since 14.may.2020
	* @desc OO Present. Present owns App
*/

"use strict";

const presentContainer = document.querySelector('#presents');
const titleContainer = document.querySelector('#title');
const app = new App(presentContainer, titleContainer);
