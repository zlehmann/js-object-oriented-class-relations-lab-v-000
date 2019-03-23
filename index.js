let store = { drivers: [], passengers: [], trips: [] };

class Driver {
  let driverId = 0;

  construct(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }


}
