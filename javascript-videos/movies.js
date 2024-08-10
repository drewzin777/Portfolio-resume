function createMovieElement(movie) {
    return `<div class="movie">
        <h2>${movie.title}</h2>
        <p>Director: ${movie.director}</p>
        <p>Release Date: ${movie.release_date}</p>
    </div>`;
}

// Function to display movies
function displayMovies(movies) {
    const movieListElement = document.getElementById("movie-list");
    movieListElement.innerHTML = movies.map(createMovieElement).join("");
}

// Function to fetch and display movies
function fetchAndDisplayMovies() {
    fetch("movies.json")
        .then(response => response.json())
        .then(movies => {
            displayMovies(movies);

            // Add event listener for search button
            const searchButton = document.getElementById("search-bar");
            searchButton.addEventListener("click", () => {
                const searchInput = document.getElementById("search-input").value.toLowerCase();
                const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchInput));
                displayMovies(filteredMovies);
            });
        })
        .catch(error => console.error("Failed to fetch movies:", error));
}

// Initial fetch and display of movies
fetchAndDisplayMovies();