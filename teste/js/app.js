import { getMovies, searchMovies } from "./api.js";
import { renderMovies, renderHorizontalList, openModal } from "./ui.js";
import { elements } from "./list.js";

async function loadHome() {
  const popular = await getMovies("popular");
  renderMovies(popular.results, elements.moviesGrid, (movie) =>
    openModal(movie, elements.modal, elements.modalData)
  );

  const top = await getMovies("top_rated");
  renderHorizontalList(top.results, elements.topRatedList, (movie) =>
    openModal(movie, elements.modal, elements.modalData)
  );

  const now = await getMovies("now_playing");
  renderHorizontalList(now.results, elements.nowPlayingList, (movie) =>
    openModal(movie, elements.modal, elements.modalData)
  );
}

loadHome();

/* SEARCH */
function handleSearch() {
  const query = elements.searchInput.value.trim();
  if (query.length < 2) return;

  searchMovies(query).then(data => {
    renderMovies(data.results, elements.moviesGrid, (movie) =>
      openModal(movie, elements.modal, elements.modalData)
    );
  });
}

elements.searchBtn.addEventListener("click", handleSearch);

elements.searchInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleSearch();
});

/* MODAL */
elements.closeModal.addEventListener("click", () => {
  elements.modal.classList.remove("active");
});