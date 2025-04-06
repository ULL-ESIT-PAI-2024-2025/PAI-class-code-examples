/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 6, 2025
 * @desc A simpole Bulma page showcasing some of the possibilities of the famework
 */

function main(): void {
  const burger = document.querySelector('.navbar-burger')! as HTMLElement;
  const menu = document.getElementById('navbarMenu')! as HTMLElement;
  if (burger && menu) { // Ensure both elements exist 
    burger.addEventListener('click', () => {
      burger.classList.toggle('is-active');
      menu.classList.toggle('is-active');
    });
  } else {
    console.error('Burger menu or navbar menu element not found.');
  }
}

main();
