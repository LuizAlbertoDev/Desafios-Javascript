import { IMG, BACKDROP } from "./api.js";

export function renderMovies(movies, container, onClick) {
  container.innerHTML = "";

  movies.forEach(movie => {
    const poster = movie.poster_path
      ? `${IMG}${movie.poster_path}`
      : "https://placehold.co/500x700";

    const card = document.createElement("div");
    card.classList.add("movie-card");

    card.innerHTML = `
      <img src="${poster}">
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.overview || "Sem descrição disponível."}</p>
      </div>
    `;

    card.addEventListener("click", () => onClick(movie));

    container.appendChild(card);
  });
}

export function renderHorizontalList(movies, container, onClick) {
  container.innerHTML = "";

  movies.forEach(movie => {
    const poster = movie.poster_path
      ? `${IMG}${movie.poster_path}`
      : "https://placehold.co/300x450";

    const card = document.createElement("div");
    card.classList.add("small-card");

    card.innerHTML = `
      <img src="${poster}">
      <h4>${movie.title}</h4>
    `;

    card.addEventListener("click", () => onClick(movie));

    container.appendChild(card);
  });
}

export function openModal(movie, modal, modalData) {
  const backdrop = movie.backdrop_path
    ? `${BACKDROP}${movie.backdrop_path}`
    : "https://placehold.co/1200x700";

  modalData.innerHTML = `
    <img src="${backdrop}" style="width:100%;height:400px;object-fit:cover;">
    <div style="padding:30px;">
      <h1>${movie.title}</h1>
      <div>⭐ ${movie.vote_average?.toFixed(1) || "N/A"}</div>
      <p style="margin-top:20px;opacity:.8">
        ${movie.overview || "Sem descrição."}
      </p>
    </div>
  `;

  modal.classList.add("active");
}