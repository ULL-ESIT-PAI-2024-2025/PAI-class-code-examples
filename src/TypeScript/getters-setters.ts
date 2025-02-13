/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc Accessors
  */

class Person {
  constructor(age: number, firstName: string, lastName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
  }

  public getAge(): number {
    return this.age;
  }

  public setAge(theAge: number): void {
    if (theAge <= 0 || theAge >= 200) {
      throw new Error('The age is invalid');
    }
    this.age= theAge;
  }

  private getFirstName(): string {
    return this.firstName;
  }

  private getLastName(): string {
    return this.lastName;
  }

  public getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  private age: number;
  private firstName: string;
  private lastName: string;
}

export let main = async () => {
  const alan = new Person(113, 'Alan', 'Turing');
  console.log(alan.getFullName(), ' is ', alan.getAge(), ' years old.');
};

main();
