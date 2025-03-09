/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas
 *
 * @author F. de Sande
 * @since Feb 20, 2020 
 * @since Feb 26, 2021
 * @since Mar 7, 2023
 * @version 3
 * @description TS Object Oriented Analog HTML-Canvas based Clock
 * @tutorial Adapted from {@link https://www.w3schools.com/graphics/canvas_clock.asp}
 * Also, check out {@link https://gist.github.com/fixiecoder/a6146501aaa8ad3bf885fa30a66ba079}
 */

/** @classdesc Represents an analog clock */
class Clock {
  /**
   * @description Creates a clock
   * @param containerElement - The HTML that will include the clock
   * @param size - clock size
   */
  constructor(
      private readonly containerElement: HTMLElement, 
      private readonly size: number,
      // By default document.createElement returns a HTMLElementtype which is a generic type.
      // In order to make your app understand it is a canvas element you need to cast it 
      private readonly canvas: HTMLCanvasElement = document.createElement('CANVAS') as HTMLCanvasElement, // Creates A new HTML element: a canvas
      private readonly context: CanvasRenderingContext2D = canvas.getContext('2d')!,
      private radius: number = 0,
      private centerX: number = 0,
      private centerY: number = 0) { // Body
    this.radius = 0.95 * (this.size / 2);
    this.canvas.width = this.size;
    this.canvas.height = this.size;
    this.containerElement.appendChild(this.canvas); // Adds the canvas HTML element as a 'child' of the containerElement (body)
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.context.translate(this.centerX, this.centerY);
    this.renderArrow();
  }

  /**
   * @description Draws the clock face
   * @param context - Canvas Drawing Context
   */
  private drawClockFace(context: CanvasRenderingContext2D): void {
    const FILL_STYLE: string = 'slategray'; // For gradient (external ring)

    // Draw the white clock Face
    context.beginPath();
    context.arc(0, 0, this.radius, 0, 2 * Math.PI);
    context.fillStyle = 'white';
    context.fill();

    // Create a radial gradient (95% and 105% of radius):
    //                                     createRadialGradient(x0, y0, r0,              x1, y1, r1);
    let gradient: CanvasGradient = context.createRadialGradient(0, 0, this.radius * 0.95, 0, 0, this.radius * 1.05);

		// Create 3 color stops, corresponding with the inner, middle, and outer edge of the arc:
    gradient.addColorStop(0, FILL_STYLE);
    gradient.addColorStop(0.5, 'white');
    gradient.addColorStop(1, FILL_STYLE);

    // Define the gradient as the stroke style of the drawing object:
    context.strokeStyle = gradient;
    context.lineWidth = this.radius * 0.1;
    context.stroke();

    // Draw the cental black button
    context.beginPath();
    context.arc(0, 0, this.radius * 0.1, 0, 2 * Math.PI);
    context.fillStyle = FILL_STYLE;
    context.fill();
    return;
  }

  /**
   * @description Draws the clock numbers
   * @param context - Canvas Drawing Context
   */
  private drawNumbers(context: CanvasRenderingContext2D): void {
    context.font = this.radius * 0.15 + 'px arial';
    context.fillStyle = 'black'; // Numbers color
    context.textBaseline = 'middle';
    context.textAlign = 'center';
    for (let hour = 1; hour <= 12; hour++) {
      const RATIO: number = 0.85; // 85%
      const ANGLE: number = hour * Math.PI / 6; // Pi/6 = 2*Pi/12
      context.rotate(ANGLE);
      context.translate(0, -this.radius * RATIO);
      context.rotate(-ANGLE);
      context.fillText(String(hour), 0, 0);
      context.rotate(ANGLE);
      context.translate(0, this.radius * RATIO);
      context.rotate(-ANGLE);
    }
    return;
  }

  /** @description Draws the clock and performs it's animation */
  public renderArrow = (): void => {
    this.drawClockFace(this.context);
    this.drawNumbers(this.context);
    return;
  }
}

let clock: Clock = new Clock(document.body, 800);
console.log(clock);
