const btnStringLength = document.getElementById('btnStringLength');
const btnToUpperCase = document.getElementById('btnToUpperCase');
const btnToLowerCase = document.getElementById('btnToLowerCase');
const btnTrim = document.getElementById('btnTrim');
const btnReverse = document.getElementById('btnReverse');
const btnReset = document.getElementById('btnReset');

//function giving length of string
btnStringLength.onclick = () => { 
    let userString = document.getElementById("userString").value;
    let stringCount = userString.length; 
    let out = "<h2>String Information</h2>"; 
    out += "Characters: " + stringCount + "<br>";

    //display the result in the output div
    document.getElementById("output").innerHTML = out; 
};

//function display string to uppercase
btnToUpperCase.onclick = () => {
    let userString = document.getElementById('userString').value;
    let result = userString.toUpperCase();
    let out = "<h2>String Information</h2>";
    out += "Uppercase: " + result + "<br>";

    //display the result in output div
    document.getElementById("output").innerHTML = out; 
};

//function to convert the string to lowercase
btnToLowerCase.onclick = () => {
    let userString = document.getElementById("userString").value;
    let result = userString.toLowerCase(); 
    let out = "<h2>String Information</h2>"; 
    out += "Lowercase: " + result + "<br>";

    //display the result in output div
    document.getElementById("output").innerHTML = out;
};

//function to trim the string
btnTrim.onclick = () => {
    let userString = document.getElementById("userString").value;
    let result = userString.trim();
    let out = "<h2>String Information</h2>"; 
    out += "Trimmed: " + result + "<br>";

     //display the result in output div
     document.getElementById("output").innerHTML = out;
};

//function to reverse the string
btnReverse.onclick = () => {
    let userString = document.getElementById("userString").value;
    let result = userString.split('').reverse().join('');
    let out = "<h2>String Information</h2>"; 
    out += "Reversed: " + result + "<br>";

    //display the result in output div
    document.getElementById("output").innerHTML = out;
}

//Function to reset the input and output fields
btnReset.onclick = () => {
    document.getElementById("userString").value = '';
    document.getElementById("output").innerHTML = '';
};
