class Vehicle {
    constructor(number, capacity, route, type) {
        this.number = number; 
        this.capacity = capacity;
        this.route = route;
        this.type = type; 
        this.passengers = [];
    }

    display() {
        return `Type: ${this.type}, Number: ${this.number}, Capacity: ${this.capacity}`;
    }


    addPassenger(passenger) {
        if (this.passengers.length >= this.capacity) {
            return `Cannot add passenger, vehicle ${this.number} is full.`;
        } else if (passenger.onVehicle) {
            return `${passenger.name} is already on a vehicle.`;
        } else {
            this.passengers.push(passenger); 
            passenger.onVehicle = true; 
            return `${passenger.name} added to vehicle ${this.number}.`;
        }
    }

    removePassenger(passenger) {
        const index = this.passengers.indexOf(passenger); 
        if(index > -1) {
            this.passengers.splice(index, 1); 
            passenger.onVehicle = false; 
            return `${passenger.name} removed from vehicle ${this.number}.`;
        } else {
            return `${passenger.name} is not on this vehicle.`
        }
     }

     listPassengers() {
        return this.passengers.map(p => `${p.name}, Destination: ${p.destination}`).join(`<br>`);
     }

     static listVehicles(vehicles) {
        return vehicles.map(vehicle => vehicle.display()).join('<br>'); 
     }
}

    class Bus extends Vehicle {
        constructor(number, capacity, route, type = "Bus", stops = []) {
            super(number, capacity, route, type); 
            this.stops = stops;
        }
           
    }

    class Train extends Vehicle {
        constructor(number, capacity, route, type = "Train", compartments = 0) {
            super(number, capacity, route, type); 
            this.compartments = compartments;
        }
    }

    class Subway extends Vehicle {
        constructor(number, capacity, route, type = "Subway", underground = true) {
            super(number, capacity, route, type);
            this.underground = underground; 
        }
    }

    class Tram extends Vehicle {  // Added the Tram class
        constructor(number, capacity, route, type = "Tram", electric = true) {
            super(number, capacity, route, type);
            this.electric = electric;
        }
    }

    class Passenger {
        constructor(name, age, destination) {
            this.name = name; 
            this.age = age; 
            this.destination = destination;
            this.onVehicle = false; 
        }

        display() {
            return`Name: ${this.name}, Age: ${this.age}, Destination: ${this.destination}`;
        }
    }

    //vehicles
    const bus1 = new Bus("B123", 50, "Route 1", "Bus", ["Stop 1", "Stop 2"]); 
    const train1 = new Train("T456", 200, "Route 2", "Train", 10);
    const subway1 = new Subway("S789", 100, "Route 3"); 
    const tram1 = new Tram("Tram1", 80, "Route 4");

    const vehicles = [bus1, train1, subway1, tram1];

    document.getElementById('addPassengerBtn').addEventListener('click', () => {
        const name = document.getElementById('passengerName').value; 
        const age = parseInt(document.getElementById('passengerAge').value); 
        const destination = document.getElementById('passengerDestination').value; 
        const vehicleNumber = document.getElementById('vehicleNumber').value;
        const vehicleType = document.getElementById('vehicleType').value;

        const passenger = new Passenger(name, age, destination); 
        const vehicle = vehicles.find(v => v.number === vehicleNumber && v.type === vehicleType);

        if (vehicle) {
            document.getElementById('output').innerHTML = vehicle.addPassenger(passenger); 
            } else {
                document.getElementById('output').innerHTML = `Vehicle ${vehicleNumber} of type ${vehicleType} not found.`;
            }
    });

    document.getElementById('removePassengerBtn').addEventListener('click', () => {
        const name = document.getElementById('passengerName').value; 
        const vehicleNumber = document.getElementById('vehicleNumber').value;
        const vehicleType = document.getElementById('vehicleType').value;

        const vehicle = vehicles.find(v => v.number === vehicleNumber && v.type === vehicleType);
        const passenger = vehicle ? vehicle.passengers.find(p => p.name === name) : null;

        if (vehicle && passenger) {
            document.getElementById('output').innerHTML = vehicle.removePassenger(passenger);
        } else {
            document.getElementById('output').innerHTML = `Passenger or vehicle not found.`;
        }
    });
    
    document.getElementById('listPassengersBtn').addEventListener('click', () => {
        const vehicleNumber = document.getElementById('vehicleNumber').value;
        const vehicleType = document.getElementById('vehicleType').value;
    
        const vehicle = vehicles.find(v => v.number === vehicleNumber && v.type === vehicleType);
    
        if (vehicle) {
            document.getElementById('output').innerHTML = vehicle.listPassengers();
        } else {
            document.getElementById('output').innerHTML = `Vehicle ${vehicleNumber} of type ${vehicleType} not found.`;
        }
    });
    
    document.getElementById('listVehiclesBtn').addEventListener('click', () => {
        document.getElementById('output').innerHTML = Vehicle.listVehicles(vehicles);
    });

    