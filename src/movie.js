
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";

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

const params = window.location.search;
const id = new URLSearchParams(params).get('id');
console.log(id)
const container = document.querySelector('.container');
const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=3fd2be6f0c70a2a598f084ddfb75487c`;


async function getMovies(url) {
    const resp = await fetch(url);
    const respData = await resp.json();
    console.log(respData);
    showMovies(respData);
    const ticketButton = document.getElementById('order-button')
    console.log(ticketButton)
    ticketButton.addEventListener('click', () => {
        localStorage.setItem('movie', JSON.stringify(respData));
    })
    
}
if (id) {
    getMovies(API_URL);
}





function showMovies(movie) {
    container.innerHTML = "";
        const movieTitle = movie.original_title;
        const moviePoster = movie.poster_path;
        const movieVote = movie.vote_average;
        const movieId = movie.id;
        const movieLang = movie.original_language;
        const movieAdult = movie.adult ? "Yes" : "No";
        const movieDesc = movie.overview;
        const movieGenres = movie.genres;

        const date = new Date(movie.release_date)
        const movieElm = document.createElement("div");
        
        container.innerHTML += `
            <div class="movie-img">
                <img src="${IMG_PATH+moviePoster}" alt="">
            </div>
            <div class="movie-content">
                <div class="movie-content-header">
                    <a href="#">
                        <h3 class="movie-title">${movieTitle}</h3>
                    </a>
                </div>
                <div class="genre-categories">
                    ${
                        movieGenres.map((genre) => {
                            return `<span class="genre">${genre.name}</span>`
                        }).join(' ')
                    }
                </div>
                <div class="movie-info">
                    <div class="info-section">
                        <label>Release Date</label>
                        <span>${date.getDate() + " " + 
                        (["January", "February", 
                        "March", "April", 
                        "May", "June", "July", 
                        "August", "September", 
                        "October", "November", 
                        "December"][date.getMonth()])
                        + " " + date.getFullYear()}</span>
                    </div>
                    <div class="info-section">
                        <label>Review</label>
                        <span>${movieVote.toFixed(1)}</span>
                    </div>
                    <div class="info-section">
                        <label>Original Lang</label>
                        <span>${movieLang}</span>
                    </div>
                    <div class="info-section">
                        <label>Adult? 18+</label>
                        <span>${movieAdult}</span>
                    </div>
                </div>
                <div class="movie-desc">
                    <p>
                        ${movieDesc}
                    </p>
                </div>
                <div class="order-container">
                    <a href="./movie_order.html" target="_blank">
                        <button id="order-button">Order Tickets</button>
                    </a>
                </div>
            </div>
          `

        container.appendChild(movieElm);
}

