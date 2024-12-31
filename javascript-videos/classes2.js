class Vehicle {
    constructor(number, capacity, route, type) {
        this.number = number; 
        this.capacity = capacity;
        this.route = route;
        this.type = type; 
        this.passengers = [];      //Array to hold passengers on vehicle
    }

    
    addPassenger(passenger) {
        if(this.passengers.length < this.capacity) {
            this.passengers.push(passenger);
            passenger.onVehicle = true;
        } else {
            alert ('Vehicle is at full capacity.');
        }
            
    }
        
    removePassenger() {
        const removedPassenger = this.passengers.pop();  //this only removes the last person added
        if (removedPassenger) {
            removedPassenger.onVehicle = false;
        }
        return removedPassenger;
        }
}


//Subclasses for vehicles
    class Bus extends Vehicle {
        constructor(number, capacity, route, busType) {
            super(number, capacity, route, `Bus`); 
            this.busType = busType;
        }     
    }

    class Train extends Vehicle {
        constructor(number, capacity, route, numCarriages) {
            super(number, capacity, route, `Train`); 
            this.numCarriages = numCarriages;
        }
    }

    class Subway extends Vehicle {
        constructor(number, capacity, route, underground) {
            super(number, capacity, route, `Subway`);
            this.underground = underground; 
        }
    }


//Passenger class

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
    const cityBus = new Bus(301, 40, `Central Station to Riverside`, `City Bus`); 
    const expressTrain = new Train(401, 300, `North Line to downtown Bellingham`, 10);
    const metroSubway = new Subway(501, 100, `Green Line to uptown New York`, true); 

    const vehicles = [cityBus, expressTrain, metroSubway];

    //Array to hold all Passengers
    const passengers = [];
    //DOM Elements
    const passengerNameInput = document.getElementById('passengerName'); 
    const passengerAgeInput = document.getElementById('passengerAge'); 
    const passengerDestinationInput = document.getElementById('passengerDestination');
    const addPassengerBtn = document.getElementById('addPassengerBtn'); 
    const listVehiclesBtn = document.getElementById('listVehiclesBtn');
    const vehicleList = document.getElementById('vehicleList');
   

//Add Passenger to vehicle function
function addPassengerToVehicle(vehicleIndex) {
    const name = passengerNameInput.value; 
    const age = parseInt(passengerAgeInput.value); 
    const destination = passengerDestinationInput.value; 

    if (!name || isNaN(age) || !destination) {
        alert(`Please enter valid passenger information.`);
        return;
    }

    const newPassenger = new Passenger (name, age, destination);
    

    //Check if passenger already exists on vehicle
    const isPassengerOnAnyVehicle = vehicles[vehicleIndex].passengers.some(
        passenger => 
            passenger.name === newPassenger.name && 
            passenger.age === newPassenger.age &&
            passenger.destination === newPassenger.destination
        );
    
    if (isPassengerOnAnyVehicle) {
        alert(`${newPassenger.name} is already on this vehicle.`);
       return;
    }
    //add passenger to vehicle
    vehicles[vehicleIndex].addPassenger(newPassenger);
    passengers.push(newPassenger);
    //clear input fields
    passengerNameInput.value = '';
    passengerAgeInput.value = '';
    passengerDestinationInput.value = '';

    listVehicles(); //Update vehicle list 
}

//remove passenger from vehicle
function removePassengerFromVehicle(vehicleIndex){
    const removedPassenger = vehicles[vehicleIndex].removePassenger();

    if (removedPassenger) {
        passengers.splice(passengers.indexOf(removedPassenger), 1);
        alert (`${removedPassenger.name} removed from Vehicle ${vehicles[vehicleIndex].number}`);
    } else {
        alert ('No passengers to move from this vehicle.');
    }
        listVehicles();
}


//list vehicles
function listVehicles() {
    vehicleList.innerHTML = '';  //clear previous list
    
    vehicles.forEach((vehicle, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
        Vehicle ${vehicle.number} (${vehicle.type}) - ${vehicle.route}, Capacity: ${vehicle.capacity}, Passengers: ${vehicle.passengers.length}<br>
        <button onclick="addPassengerToVehicle(${index})">Add Passenger</button>
        <button onclick="removePassengerFromVehicle(${index})">Remove Passenger</button>
        `;
     
        vehicleList.appendChild(li);
    });
}
//Set up listeners after DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    listVehicles();
    document.getElementById('listVehiclesBtn').addEventListener('click', listVehicles);
       
});
//listVehiclesBtn.addEventListener('click', listVehicles);



