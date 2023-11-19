const apiUrl = `https://api.jikan.moe/v4/`;

function getAnimeById(animeId) {
  fetch(`${apiUrl}anime/${animeId}/full`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}

function getTopAnime(search) {
  fetch(`${apiUrl}top/${search}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}

function animeSearch(anime) {
  fetch(`${apiUrl}anime?q=${anime}&order_by=title&sort=asc`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}


