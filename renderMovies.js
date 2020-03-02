function renderMovies(movies) {
    MoviesHtml = movies.map(renderMovie).join("");

    return `
        <div lass="outerDiv">
        ${MoviesHtml}
        </div>   `
}

function renderMovie(movie) {
    return `
        <div clss="leftDiv">
        <img class="image-photo" src ="${movie.poster}">
        </div>
        <div class="rightDiv" >
        <h2>${movie.title}</h2>
        <span>${movie.year}</span>
        <h2>${movie.imdbID}</h2>
        <p>${movie.imdbRating}/10</p>
        <p>${movie.rottenTomatoesRating*100}%</p>
            </div>`
}

function movies() {
    var content = document.getElementById('content');
    var moviesAbstraction = [{
            title: "The Dark Knight",
            year: 2008,
            imdbID: "tt0468569",
            poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.94
        },
        {
            title: "The Dark Knight Rises",
            year: 2012,
            imdbID: "tt1345836",
            poster: "https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_SX300.jpg",
            imdbRating: 8,
            rottenTomatoesRating: 0.82
        },
        {
            title: "The Incredibles",
            year: 2004,
            imdbID: "tt0317705",
            poster: "https://m.media-amazon.com/images/M/MV5BMTY5OTU0OTc2NV5BMl5BanBnXkFtZTcwMzU4MDcyMQ@@._V1_SX300.jpg",
            imdbRating: 9,
            rottenTomatoesRating: 0.91
        }
    ]
    content.innerHTML = renderMovies(moviesAbstraction);
}