 function createMovieElement(movie){
    return `<div class="movie">         
    <h2>${movie.title}</h2><p>Director: ${movie.director}</p>
    <p>Release Date: ${movie.release_date}</p>`;

}

//Function to fetch and display movies
function displayMovies() {
    fetch("movies.json")
        .then(response => response.json())
        .then(movies => {
            const movieListElement = document.getElementById("movie-list");
            movieListElement.innerHTML = movies.map(createMovieElement).join("");
        })
        .catch(error => console.error("failed to fetch movies:", error));
}

displayMovies();