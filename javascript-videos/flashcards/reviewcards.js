document.addEventListener('DOMContentLoaded', () => {
    let cards = [];
    let currentCardIndex = 0;
    let showingFront = true;

    const frontCardElement = document.getElementById('frontCard');
    const backCardElement = document.getElementById('backCard');
    const cardNumElement = document.getElementById('cardNum');
    const numCardsElement = document.getElementById('numCards');

    // Load cards from localForage
    localforage.getItem('flashcards').then(storedCards => {
        if (storedCards && storedCards.length > 0) {
            cards = storedCards;
            numCardsElement.textContent = cards.length;
            displayCard(currentCardIndex);
        } else {
            document.getElementById('card').innerHTML = "<p>No flashcards found. Go create some!</p>";
        }
    }).catch(err => {
        console.error("Error loading flashcards:", err);
    });

    // Display the current card
    function displayCard(index) {
        const card = cards[index];
        frontCardElement.textContent = card.front;
        backCardElement.textContent = card.back;
        backCardElement.style.display = "none"; // Show only the front initially
        frontCardElement.style.display = "block";
        cardNumElement.textContent = index + 1;
    }

    // Flip the card
    document.getElementById('btnFlip').addEventListener('click', () => {
        if (showingFront) {
            frontCardElement.style.display = "none";
            backCardElement.style.display = "block";
        } else {
            backCardElement.style.display = "none";
            frontCardElement.style.display = "block";
        }
        showingFront = !showingFront;
    });

    // Move to the next card
    document.getElementById('card').addEventListener('click', () => {
        currentCardIndex = (currentCardIndex + 1) % cards.length;
        displayCard(currentCardIndex);
        showingFront = true; // Reset to front side
    });
});
