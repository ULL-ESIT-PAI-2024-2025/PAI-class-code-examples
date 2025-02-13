/**
  * Universidad de La Laguna
  * Escuela Superior de Ingeniería y Tecnología
  * Grado en Ingeniería Informática
  * Programación de Aplicaciones Interactivas
  *
  * @author F. de Sande
  * @since Feb 11, 2023
  * @desc TS classes. Constructor
  *       the class BlueSkyProfile has 3 attributes and a constructor
  */

class BlueSkyProfile {
  name: string;
  followers: number;
  verified: boolean = false;
  
  constructor(name: string, followers: number, verification: boolean) {
    this.name = name;
    this.followers = followers;
    this.verified = verification;
  }
  // Methods would go here
}

export let main = async () => {
  let myProfile: BlueSkyProfile = new BlueSkyProfile ('Sande', 32, true);
  console.log(myProfile.name + ' has ' + myProfile.followers + ' followers on BlueSky!');
  console.log(myProfile.name + ' is verified: ' + myProfile.verified);
};

main();
