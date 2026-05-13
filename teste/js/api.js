const API_KEY = "";
const BASE_URL = "https://api.themoviedb.org/3";

export const IMG = "https://image.tmdb.org/t/p/w500";
export const BACKDROP = "https://image.tmdb.org/t/p/original";

async function fetchData(url) {
  const response = await fetch(url);
  return response.json();
}

export async function getMovies(type = "popular") {
  return fetchData(
    `${BASE_URL}/movie/${type}?api_key=${API_KEY}&language=pt-BR&page=1`
  );
}

export async function getMoviesByGenre(genre) {
  return fetchData(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=pt-BR&with_genres=${genre}`
  );
}

export async function searchMovies(query) {
  return fetchData(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=pt-BR&query=${query}`
  );
}