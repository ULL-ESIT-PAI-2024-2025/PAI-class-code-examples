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
  *       En este programa, la función main se está exportando (export) lo cual posibilitaría su utilización
  *       en otro módulo, mediante importación. Se hace solo a efectos ilustrativos.
  *       main() se ha escrito como una función flecha asíncrona. Una función asíncrona podría contener 
  *       operaciones que se ejecutan de manera no bloqueante, como llamadas tareas que toman tiempo. 
  *       Si no se quiere que la función sea asíncrona, basta eliminar la palabra 'async' de la definición de
  *       la función. En este caso concreto, todo funcionaría del mismo modo.
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
