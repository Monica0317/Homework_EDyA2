class Persona {
    constructor(nombre, edad, ciudad) {
      this.nombre = nombre;
      this.edad = edad;
      this.ciudad = ciudad;
    }
  }
  
  class Ciudad {
    constructor(nombre) {
      this.nombre = nombre;
      this.residentes = [];
    }
  
    agregarPersona(persona) {
      this.residentes.push(persona);
    }
  
    listarResidentes() {
      return this.residentes
        .map((persona) => `${persona.nombre}, ${persona.edad} años`)
        .join("\n");
    }
  }
  
  let ciudad1 = new Ciudad("Bogotá");
  let ciudad2 = new Ciudad("Cali");
  let ciudad3 = new Ciudad("Medellín");
  let ciudad4 = new Ciudad("Cartagena");
  
  let persona1 = new Persona("Carlos", 40, ciudad1);
  let persona2 = new Persona("Lucía", 35, ciudad1);
  let persona3 = new Persona("Andrés", 28, ciudad2);
  let persona4 = new Persona("Marta", 50, ciudad2);
  let persona5 = new Persona("Juan", 22, ciudad1);
  let persona6 = new Persona("Laura", 32, ciudad3);
  let persona7 = new Persona("Pedro", 45, ciudad3);
  let persona8 = new Persona("Sofía", 29, ciudad4);
  let persona9 = new Persona("Marcos", 38, ciudad4);
  let persona10 = new Persona("Paula", 26, ciudad2);
  
  ciudad1.agregarPersona(persona1);
  ciudad1.agregarPersona(persona2);
  ciudad1.agregarPersona(persona5);
  ciudad2.agregarPersona(persona3);
  ciudad2.agregarPersona(persona4);
  ciudad2.agregarPersona(persona10);
  ciudad3.agregarPersona(persona6);
  ciudad3.agregarPersona(persona7);
  ciudad4.agregarPersona(persona8);
  ciudad4.agregarPersona(persona9);
  
  function imprimirResidentes(ciudad) {
    console.log(`Residentes de ${ciudad.nombre}:`);
    console.log(ciudad.listarResidentes());
  }
  
  imprimirResidentes(ciudad1);
  imprimirResidentes(ciudad2);
  imprimirResidentes(ciudad3);
  imprimirResidentes(ciudad4);
  