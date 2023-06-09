class Car extends Vehicle {
  constructor(make, model, year, color, mileage, numberOfDoors, transmissionType) {
    super(make, model, year, color, mileage);
    this.numberOfDoors = numberOfDoors;
    this.transmissionType = transmissionType;
  }

  lockDoors() {
    console.log('Doors locked.');
  }

  unlockDoors() {
    console.log('Doors unlocked.');
  }

  shiftGear(gear) {
    console.log(`Shifted to ${gear} gear.`);
  }
}
