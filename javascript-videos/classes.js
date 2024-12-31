let rockband = class {
    constructor(name, members, genre) {
        this.name = name; 
        this.members = members; 
        this.genre = genre;
    }

    display() {
        console.log(`${this.name} is a  ${this.genre} band, with members 
        ${this.members}`);
    }
}

let metallica = new rockband("Metallica", ["James Hatfield", "Lars Ulrich", "Kirk Hammett",
     "Robert Trujillo"], "Heavy Meatal");

     metallica.display();

let ledZeppelin = new rockband("LedZeppelin", ["Robert Plant", "Jimmy Page", "John Paul Jones", "John Bonham",
    "Hard Rock"]);


ledZeppelin.display();

