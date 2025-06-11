class Store {
  private static singleInstance: Store | null = null;

  createStore() {
    if (Store.singleInstance === null) {
      console.log("Created new instance");
      Store.singleInstance = new Store();
    } else {
      console.log("Using old instance");
    }

    return Store.singleInstance;
  }
}

const server = new Store();
const server2 = new Store();

const store1 = server.createStore(); // Created new instance
const store2 = server.createStore(); // Using old instance

const store11 = server2.createStore(); // Created new instance
const store22 = server2.createStore(); // Using old instance

console.log(store1 === store11); // true
