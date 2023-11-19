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
    .then((responseData) => {
        const animeData = responseData.data
        for (let anime = 0; anime < animeData.length; anime++) {
          createAnimeCards(animeData[anime]);
        }
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
    .then((responseData) => {
        console.log(responseData);
        // const animeData = responseData.data
        // // for (let anime = 0; anime < animeData.length; anime++) {
        // //   createAnimeCards(animeData[anime]);
        // // }
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}

function createAnimeCards(animeCard) {
  const animeContainer = document.createElement("div");
  animeContainer.classList.add("anime-card");

  const title = document.createElement("h3");
  title.textContent = animeCard.title;

  const animeImg = document.createElement("img");
  animeImg.className = "anime-card-img";
  animeImg.setAttribute("src", animeCard.images.jpg.image_url);

  animeContainer.append(title, animeImg);

  document.querySelector(".anime-list").append(animeContainer);
}

getTopAnime('anime');

// limit amount of times search can be clicked -> set timeout and disable