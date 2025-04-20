/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Apr 23, 2023
 * @description Events. OO Present. Multiple Presents. Main program
 *              Ha de tenerse en cuenta que:
 *              * El proyecto ha de compilarse usando tsc sin pasar parámetros para que tsc utilice la información del tsconfig.json
 *              * El código HTML ha de usar la etiqueta script incluyendo type="module" 
 *                When using this option (module), the processing of the script contents is deferred.                   
 *              * El código del programa cliente ha de importar el módulo poniendo explícitamente 
 *                la extensión .js del fichero importado (sentencia import {App} from './app.js'; )
 *              * En el fichero tsconfig ha de usarse "module": "es2015",
 *              * La página html no funciona si se carga directamente desde un navegador, 
 *                sino que ha de utilizarse un servidor para alojarla (el que configuraron en su máquina 
 *                virtual o bien usar la extensión live server de VSC).
 */

import {App} from './app.js';

function main(): void {
  const presentContainer: HTMLElement = document.querySelector('#presents')! as HTMLElement;
  const titleContainer: HTMLElement = document.querySelector('#title')! as HTMLElement;
  const app = new App(presentContainer, titleContainer);
}

main();
