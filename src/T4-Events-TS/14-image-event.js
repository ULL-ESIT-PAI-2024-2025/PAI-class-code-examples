/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc JS Events and descendants
 * If you click on the <img>, will the toggleVisibility function fire?   
 * Yes, a click event set on an element will fire if you click on a child of that element
 * If you put a click event listener on the div, and the user clicks on the img inside 
 * that div, then the event listener will still fire
 */

'use strict';

function toggleVisibility(event) {
  const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
  const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';

  console.log('event.target is: ' + event.target.tagName);
  console.log('event.currentTarget is: ' + event.currentTarget.tagName);

  const details = document.querySelector('.details');
  const image = event.currentTarget.querySelector('img');
  const text = event.currentTarget.querySelector('span');

  isVisible = !isVisible;  // Modifies a global variable!!
  if (isVisible) {
    details.classList.remove('hidden');
    image.src = DOWN_ARROW;
    text.textContent = 'Hide details';
  } else {
    details.classList.add('hidden');
    image.src = RIGHT_ARROW;
    text.textContent = 'Show details';
  }
}

function main() {
  const detailToggle = document.querySelector('.show-details');
  detailToggle.addEventListener('click', toggleVisibility);
}

let isVisible = false;
main();
