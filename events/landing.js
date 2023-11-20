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
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}

function getTopSeries(search) {
  fetch(`${apiUrl}top/${search}?limit=5`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((responseData) => {
      const animeData = responseData.data;
      for (let anime = 0; anime < animeData.length; anime++) {
        createAnimeCards(animeData[anime]);
      }
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}
function createAnimeCards(animeCard) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("carousel-item");

  if (document.querySelector(".carousel-inner").childElementCount === 0) {
    carouselItem.classList.add("active");
  }

  const img = document.createElement("img");
  img.classList.add("d-block", "w-100", "anime-card-img");
  img.setAttribute("src", animeCard.images.jpg.image_url);
  img.alt = animeCard.title;

  const carouselCaption = document.createElement("div");
  carouselCaption.classList.add("carousel-caption", "d-none", "d-md-block");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = animeCard.title;

  carouselCaption.appendChild(title);
  carouselItem.appendChild(img);
  carouselItem.appendChild(carouselCaption);

  document.querySelector(".carousel-inner").appendChild(carouselItem);
}

getTopSeries("anime");
