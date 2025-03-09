/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande <fsande@ull.es>
 * @since Mar 9, 2023
 * @version 1
 * @desc A first example of a canvas TS drawing application
 */

/** @classdesc A class for drawing on Canvas  */
class DrawingApplication {
  /** @description Draw 2 squares */
  constructor(
    private canvas: HTMLCanvasElement = document.getElementById('tutorial') as HTMLCanvasElement,
    private context: CanvasRenderingContext2D = canvas.getContext('2d')) {

    // outlined square X: 50, Y: 35, width/height 50
    context.strokeRect(50, 35, 50, 50);

    // filled square X: 125, Y: 35, width/height 50
    context.fillStyle = 'red';
    context.fillRect(125, 35, 50, 50);
  }
}

function simpleExample(): void { 
  new DrawingApplication();
}

simpleExample();
