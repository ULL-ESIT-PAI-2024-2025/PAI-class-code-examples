/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Constructors can be overloaded
  * @see https://www.typescriptlang.org/docs/handbook/2/classes.html#constructors
  */

class Point1 {
  coordX: number;
  coordY: number;

  // Normal signature with defaults
  constructor(coordX = 0, coordY = 0) {
    this.coordX = coordX;
    this.coordY = coordY;
    console.log(`Usual constructor. Point (${this.coordX}, ${this.coordY})`);
  }
}

class Point2 {
  coordX: number = 0;
  coordY: number = 0;

  // Overloads
  constructor(coordX: number, coordY: string);
  constructor(coord: string);
  constructor(coordX: any, coordY?: any) {
    this.coordX = 9;
    this.coordY = 8;
    console.log(`Overloaded constructor. Point (${this.coordX}, ${this.coordY})`);
  }
}

const main = () => {
  let point1: Point1 = new Point1();
  let point2: Point2 = new Point2('Pay attention');
};

main();
