/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 16, 2023
 *        Mar 29, 2025
 * @desc JS Events. 2 Events Listeners. Capturing
 */

function onOuterClick(event: Event): void {
  const outer: HTMLDivElement = event.currentTarget as HTMLDivElement;
  outer.classList.add('selected');
  console.log('Outer clicked!');
  // event.stopPropagation();
}

function onInnerClick(event: Event): void {
  const inner: HTMLDivElement = event.currentTarget as HTMLDivElement;
  inner.classList.add('selected');
  console.log('Inner clicked!');
}

function onResetClick(event: Event): void {
  const outer: HTMLDivElement = event.currentTarget as HTMLDivElement;
  const inner: HTMLDivElement = event.currentTarget as HTMLDivElement;
  inner.classList.remove('selected');
  outer.classList.remove('selected');
}

function main() {
  const outer = document.querySelector('#outer') as HTMLDivElement;
  const inner = document.querySelector('#inner') as HTMLDivElement;
  const reset = document.querySelector('button') as HTMLButtonElement;
  outer.addEventListener('click', onOuterClick, {capture: true});
  inner.addEventListener('click', onInnerClick, {capture: true});
  reset.addEventListener('click', onResetClick);
}

main();
