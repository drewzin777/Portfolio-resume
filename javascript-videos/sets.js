 let bands = new Set(); 
 bands.add("Journey"); 
 bands.add("Reo Speedwagon"); 
 bands.add("Styx"); 
 bands.add("Foreigner");  
 bands.add("Doobie Brothers"); 
 bands.add("The Cure"); 

 //console.log(bands);

 if (bands.has("Journey")) {
    console.log("Journey is included in the set.");
 }

if (bands.has("Van Halen")) {
    console.log("Van Halen is included in the set."); 
} else {
    console.log("No Van Halen, sorry."); 
}

for (const band of bands) { //a quick way to loop through any set object
    console.log(band);
}
//MAPS

let team = new Map (
    [
        ["pitcher", "Ron Guidry"],
        ["catcher", "Rick Cerone"],
        ["centerfield", "Dave Winfield"],
        ["leftfield", "Reggie Jackson"], 
        ["shortstop", "Buck Dent"]
    ]
)

 team.set("thirdbase", "Greg Nettles");

 document.getElementById("output").innerHTML = team.get("shortstop");

 for (const [key, value] of team) {
    console.log("Postion: " + value); 
    console.log("Player: " + value); 
 }