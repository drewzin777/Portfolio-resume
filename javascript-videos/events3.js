 const box1 = document.getElementById("box1"); 
 const box2 = document.getElementById("box2"); 




box1.addEventListener("click", () => {
  box1.style.backgroundColor = box1.style.backgroundColor === "red" ? "green" : "red";
    
 }); 

 box2.addEventListener("mouseover", () => {
     box2.style.backgroundColor = box2.style.backgroundColor === "blue" ? "orange" : "blue";
    
 });
