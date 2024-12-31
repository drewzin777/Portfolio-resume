let artists = [
    "Pearl Jam",
    "Pixies", 
    "U2", 
    "Oingo Boingo",
    "The Cure",
    "Live",
    "REM",
    "Janes Addiction",
    "Rage Against The Machine",
    "Sublime"
];

//prompt user to enter favorite band
let userBands = prompt("What are your favorite bands?");

//check if band entered is in the array
if (artists.includes(userBands)) {
    document.getElementById("output").innerHTML = "That's one of my favorites also!"
} else {
    document.getElementById("output").innerHTML = "That's a good band, but not on my favorites list."
}



