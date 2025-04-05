/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since 24.apr.2020
 * @desc Bulma. Notifications
 *       The Bulma package does not come with any JavaScript. 
 *       Here is however an implementation example, which sets the click handler for Bulma delete all on the page, in vanilla Typescript
 */

function main(): void {
  const deleteButtons = document.querySelectorAll('.notification .delete');
  deleteButtons.forEach((deleteButton) => {
    const notification = deleteButton.parentNode as HTMLElement;
    deleteButton.addEventListener('click', () => {
      if (notification && notification.parentNode) {
        notification.parentNode.removeChild(notification);
      }
    });
  });
}

main();
