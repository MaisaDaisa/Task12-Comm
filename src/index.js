const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

let page = 1

// {"adult": false,
// "backdrop_path":"/4MCKNAc6AbWjEsM2h9Xc29owo4z.jpg",
// "genre_ids":[28,53,18],
// "id":866398,
// "original_language":"en",
// "original_title":"The Beekeeper",
// "overview":"One man’s campaign for vengeance takes on national stakes after he is revealed to be a former operative of a powerful and clandestine organization known as Beekeepers.",
// "popularity":2265.436,
// "poster_path":"/A7EByudX0eOzlkQ2FIbogzyazm2.jpg",
// "release_date":"2024-01-10","title":"The Beekeeper",
// "video":false,
// "vote_average":7.269,
// "vote_count":904}

const container = document.querySelector('.container');
const pageSkipper = document.querySelectorAll('.page-skipper');
const form = document.getElementById('search-form');
const search = document.getElementById('search');

pageSkipper.forEach((skipper) => {
    skipper.addEventListener('click', () => {
        if (skipper.id === 'next-button') {
            page++
            getMovies(API_URL + page);
        } 
        if (skipper.id === 'previous-button') {
            page--
            if (page < 1) {
                page = 1;
            }
            getMovies(API_URL  + page);
        }
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchedThing = search.value;
    if (searchedThing) {
        getMovies(SEARCH_API + searchedThing);
        search.value = "";
    }
});

getMovies(API_URL);

async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    console.log(respData.total_pages);
    showMovies(respData.results);
}


function showMovies(movies) {
    container.innerHTML = "";
    movies.forEach((movie) => {
        const movieTitle = movie.title;
        const moviePoster = movie.poster_path;
        const movieVote = movie.vote_average;
        const movieId = movie.id;
        const movieElm = document.createElement("div");
        
        container.innerHTML += `
            <div class="movie-card">
                <div class="movie-header">
                    <a href="./movie.html?id=${movieId}" target="_blank">
                        <img src="${IMG_PATH+moviePoster}" alt="">
                    </a>
                    <div class="movie-info">
                        <div class="movie-content-header">
                            <a href="./movie.html?id=${movieId}" target="_blank">
                                <h3 class="movie-title">${movieTitle}</h3>
                            </a>
                        </div>
                        <div class="rating">
                        <p>
                            ${movieVote.toFixed(1)}
                        </p>
                        </div>
                    </div>
                </div><!--movie-header-->
            </div><!--movie-card-->
          `

      container.appendChild(movieElm);


    });
}


