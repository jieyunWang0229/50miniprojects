const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=a491fd7a99a0c9b1166373c46a79fdab&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a491fd7a99a0c9b1166373c46a79fdab&language=en-US&query="';

const main = document.getElementById('main');
const form =document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);


async function getMovies(url) {
    const res = await fetch(url);
    const moviesData = await res.json();
    console.log(moviesData.results);
    showMovie(moviesData.results);
}

function showMovie(movies){
    main.innerHTML = '';
    movies.forEach((movie) => {
        const {title, backdrop_path, vote_average, overview} = movie;

        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
            <img src="${IMG_PATH + backdrop_path}" alt = "${title}">
            <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
            </div>
            <div class="overview">
            <h3>Overview</h3>
            ${overview}
            </div>
        `;
        main.appendChild(movieEl);
    })
   
}

function getClassByRate(rate){
    if(rate >=8 ){
        return "green";
    }else if (rate >=5 ){
        return "orange";
    }else {
        return "red";
    }

}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchTerm = search.value;
    if(searchTerm && searchTerm !== '') {
        getMovies(SEARCH_API + searchTerm)

    }else{
        window.location.reload();
    }


} )