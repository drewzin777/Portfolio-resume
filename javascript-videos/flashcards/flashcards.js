document.getElementById('btnSave').addEventListener('click', saveCard); 

let cards = new Array(); 

function saveCard(){
    let frontContent = document.getElementById('frontCard').value.trim();
    let backContent = document.getElementById('backCard').value.trim(); 
    let card = {front: frontContent, back: backContent}; 
    cards.push(card);
    console.log(cards); 
    clearUI(); 
    numCardsOut()
    storeCards();
}

storeCards = () => {
    let serializedCards = JSON.stringify(cards);
    localforage.setItem('flashcards', serializedCards).then(function () {
        return localForage.getItem('key');
    }).then(function (value) {
        alert("saved");
    }).catch(function (err) {
        console.log("error:" + err);
    });
}

numCardsOut = () => {
    document.getElementById('numCards').innerHTML = cards.length; 
}

clearUI = () => {
    document.getElementById('frontCard').value = "";
    document.getElementById('backCard').value = ""; 
}