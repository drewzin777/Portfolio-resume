//let students = [];
//let teacher = new Array();

let students = [ "Steven", 
                 "Jennifer",
                 "Hugh", 
                 "Jay", 
                 "Sharon", 
                 "Delia", 
                 "Elliott" ];

students[5] = "Della";
students.pop();
console.log(students);






//document.getElementById("output").innerHTML = students[5];

console.log(students.length);

let loopCounter = 0;
while(loopCounter < students.length) {
    document.getElementById("output").innerHTML += students[loopCounter] + "<br>";
    loopCounter++;
}

let grades = [75, 88, 91, 100, 67, 79, 85, 81, 79]; 
grades.push(90); 
grades.push(92);
console.log(grades);
let total = 0; 
for (x = 0; x < grades.length; x++) {
    total = total + grades[x];
}
 document.getElementById("output").innerHTML += Math.round(total/grades.length);