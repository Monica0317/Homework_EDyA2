class ATM {
  constructor() {
    this.atm = [];
  }
  enqueue(element) {
    this.atm.push(element);
    return this.atm;
  }
  dequeue() {
    return this.atm.shift();
  }
  peek() {
    return this.atm[0];
  }
  size() {
    return this.atm.length;
  }
  isEmpty() {
    return this.atm.length === 0;
  }
  print() {
    return this.atm;
  }
}
const ATM1 = new ATM();
const per1 = {
  Nombre: "luisa",
  HoraLlegada: "7:00 AM",
};
const per2 = {
  Nombre: "Juan",
  HoraLlegada: "8:00 AM",
};
const per3 = {
  Nombre: "pedro",
  HoraLlegada: "7:50 AM",
};
const per4 = {
  Nombre: "carmen",
  HoraLlegada: "8:10 AM",
};
console.log(ATM1.enqueue(per1));
console.log(ATM1.enqueue(per2));
console.log(ATM1.enqueue(per3));
console.log(ATM1.enqueue(per4));
ATM1.print();
