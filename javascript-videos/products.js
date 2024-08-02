fetch("products.xml")
    .then(response => response.text()) 
    .then(xmlString => {
        var parser = new DOMParser(); 
        var xmlDoc = parser.parseFromString(xmlString, "text/xml"); 
        var products = xmlDoc.getElementsByTagName("product"); 


    //create table 
        var table = document.createElement("table"); 
        var headerRow = table.insertRow(); 
        var headers = ["Name", "Price", "Quantity", "Description"];
        headers.forEach(headerText => {
            var header = document.createElement("th");
            header.textContent = headerText; 
            headerRow.appendChild(header); 
        });

    //Fill table with product data

        for(var i = 0; i < products.length; i++) {
            var row = table.insertRow();
            var name = products[i].getElementsByTagName("name")[0].textContent; 
            var price = products[i].getElementsByTagName("price")[0].textContent; 
            var quantity = products[i].getElementsByTagName("quantity")[0].textContent; 
            var description = products[i].getElementsByTagName("description")[0].textContent; 

            var cellName = row.insertCell();
            cellName.textContent = name; 
            var cellPrice = row.insertCell(); 
            cellPrice.textContent = price;
            var cellQuantity = row.insertCell(); 
            cellQuantity.textContent = quantity;
            var cellDescription = row.insertCell(); 
            cellDescription.textContent = description;

            // console.log("Name: " + name); 
            // console.log("Price: " + price); 
            // console.log("Quantity: " + quantity); 
            // console.log("Description: " + description); 
    }  
    document.getElementById("product-table-container").appendChild(table);  
})
.catch(error => console.error("Error fetching XML:", error));


//add filter function
window.filter = function() {
    var input = document.getElementById("search-bar");
    var filter = input.value.toLowerCase(); 
    var rows = table.getElementsByTagName("tr");

    for(var i = 1; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName("td"); 
        var nameCell = cells[0];   //Only search in the name column
        var match = nameCell.textContent.toLowerCase().includes(filter); 

        rows[i].style.display = match ? '' : 'none';

    }
};