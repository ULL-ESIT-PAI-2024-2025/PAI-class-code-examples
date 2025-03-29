/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020 Updated March 2025
 * @desc JS Events and descendants
 *       If you click on the <img>, will the toggleVisibility function fire?   
 *       Yes, a click event set on an element will fire if you click on a child of that element
 *       If you put a click event listener on the div, and the user clicks on the img inside 
 *       that div, then the event listener will still fire
 *
 *       In this example, the state management (visibility) is encapsulated within the DOM
 *       using the dataset property of the HTMLElement
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset}
 */

function toggleVisibility(event: Event): void {
  const RIGHT_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/forward-arrow.png';
  const DOWN_ARROW = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/down-arrow.png';
  const target = event.currentTarget as HTMLElement; // The element that triggered the event
  const details = document.querySelector('.details') as HTMLElement;
  const image = target.querySelector('img') as HTMLImageElement;
  const text = target.querySelector('span') as HTMLElement;

  const isVisible = (target.dataset.visible === 'true');
  console.log('event.target is: ' + (event.target as HTMLElement).tagName);
  console.log('event.currentTarget is: ' + (event.currentTarget as HTMLElement).tagName);
  if (isVisible) { // Toggle visibility
    details.classList.add('hidden');
    image.src = RIGHT_ARROW;
    text.textContent = 'Show details';
    target.dataset.visible = 'false'; // Update the state
  } else {
    details.classList.remove('hidden');
    image.src = DOWN_ARROW;
    text.textContent = 'Hide details';
    target.dataset.visible = 'true'; // Update the state
  }
}

function main(): void {
  const detailToggle = document.querySelector('.show-details') as HTMLElement;
  detailToggle.dataset.visible = 'false';
  detailToggle.addEventListener('click', toggleVisibility);
}

main();
