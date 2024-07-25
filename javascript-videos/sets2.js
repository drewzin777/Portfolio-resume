let bands = new Set ([
    "Bad Religion", 
    "The Clash", 
    "Green Day", 
    "The Smiths", 
    "Johnny Cash", 
    "Bob Marley", 
    "Creedence Clearwater Revival", 
    "Smashing Pumpkins", 
    "Nirvana", 
    "Foo Fighters",
    
])
bands.add("Dave Mattews Band");

bands.delete("The Clash");
console.log(bands);

bands.forEach(function(band) {
    console.log(band);
});


bands.clear();
console.log(bands);