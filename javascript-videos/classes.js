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

let metalilica = new rockband("Metallica", ["James Hatfield", "Lars Ulrich", "Kirk Hammett",
     "Robert Trujillo"], "Heavy Meatal");

     metalilica.display();

