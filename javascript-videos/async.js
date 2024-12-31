
const API_KEY = `b1e91ade`;

async function searchMovie() {
    const title = document.getElementById(`movieTitle`).value;
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';


if (!title) {
    alert(`Please enter a movie title.`); 
    return; 
}

const url = `http://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(title)}`;
const response = await fetch(url); 
const data = await response.json();

if (response.ok && data.Response === `True`) {
    data.Search.forEach(movie => {
        const li = document.createElement('li'); 
        li.textContent = `${movie.Title} (${movie.Year})`;
        resultsContainer.appendChild(li); 
    }); 
} else {
    alert(data.Error || `An error occurred while fetching data.`);
}
}