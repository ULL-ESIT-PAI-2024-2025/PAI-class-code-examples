/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc readonly properties
  *       Fields may be prefixed with the readonly modifier. 
  *       This prevents assignments to the field outside of the constructor.
  *       if name is readonly this code produces an error
  */

class Greeter {
  readonly name: string = 'world';
 
  constructor(otherName?: string) {
    if (otherName !== undefined) {
      this.name = otherName;
    }
  }
 
  error() {
    this.name = 'not ok';
  }
}

export let main = () => {
  const myGreeter = new Greeter('Earth');
  myGreeter.name = 'also not ok';
};

main();
