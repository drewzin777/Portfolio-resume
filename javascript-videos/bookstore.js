var xmlString = `
<bookstore>
    <book>
        <title>The Shawshank Redemption</title>
        <author>Stephen King</author>
        <year>1962</year>
        <price>10.99</price>
    </book>
    <book>
        <title>The Godfather</title>
        <author>Mario Puzo</author>
        <year>1969</year>
        <price>9.99</price>
    </book>
</bookstore>`
;



var parser = new DOMParser(); 
var xmlDoc = parser.parseFromString(xmlString, "text/xml");
var books = xmlDoc.getElementsByTagName("book");
for (var i = 0; i < books.length; i++) {
    var title = books[i].getElementsByTagName("title")[0].textContent; 
    var author = books[i].getElementsByTagName("author")[0].textContent; 
    var year = books[i].getElementsByTagName("year")[0].textContent; 
    var price = books[i].getElementsByTagName("price")[0].textContent; 
    console.log("Title: " + title); 
    console.log("Author: " + author); 
    console.log("Year: " + year); 
    console.log("Price: " + price);
}





// fetch("bookstore.xml")
// .then(response => response.text())
// .then(data => {
//     var parser = newDOMParser();
//     var xmlDoc = parser.parserFromString(data, "text/xml");
//     //code to handle xmlDoc
// })
// .catch(err => {
//     console.log(err);
// })