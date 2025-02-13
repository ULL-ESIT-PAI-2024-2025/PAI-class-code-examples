/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 26, 2023
  * @desc TS classes. this Keyword
  *
  *       In this program, the main function is being exported, which would make it possible 
  *       to use it in another module, by importing. This is for illustrative purposes only.
  *       main() is written as an asynchronous arrow function. An asynchronous function could 
  *       contain operations that execute in a non-blocking manner, such as called tasks that take time. 
  *       If you do not want the function to be asynchronous, just remove the word ‘async’ from the 
  *       function definition. In this particular case, everything would work the same way.
  */

class Leaf {
  color: string = 'green';

  changeColor(season: string): void {
    console.log('original color: ' + this.color);
    switch(season) {
      case 'winter': 
        this.color = 'brown';
        break;
      case 'autumn':
      case 'fall': 
        this.color = 'red';
        break; 
      case 'spring': 
        this.color = 'bright green';
        break;
      default:
        this.color = 'dark green';
        break; 
    }
    console.log('new color: ' + this.color);
  }
}

export let main = async () => {
  let bibLeaf: Leaf = new Leaf();
  bibLeaf.changeColor('fall');
};

main();
