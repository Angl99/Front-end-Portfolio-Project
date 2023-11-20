const apiUrl = `https://api.jikan.moe/v4/`;

function createAnimeCards(animeCard) {
  const animeContainer = document.createElement("div");
  animeContainer.classList.add("card");
  animeContainer.style.width = "16rem";

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.textContent = animeCard.title;

  const animeImg = document.createElement("img");
  animeImg.classList.add("card-img-top", "anime-card-img");
  animeImg.setAttribute("src", animeCard.images.jpg.image_url);
  animeImg.setAttribute("alt", animeCard.title);

  cardBody.append(title);
  animeContainer.append(animeImg, cardBody);

  document.querySelector(".anime-list").append(animeContainer);
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
        if (responseData.data.length === 0) {
          alert("There were no items found, try again.")
        } else {
          const animeData = responseData.data
        for (let anime = 0; anime < animeData.length; anime++) {
          createAnimeCards(animeData[anime]);
        }
        }
    })
    .catch((error) => {
      console.error("Error during request:", error.message);
    });
}


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const searchResult = urlParams.get('searchInput');

if (searchResult === "" ) {
  alert('Your search cannot be empty!!');
} else {
  animeSearch(searchResult);
}
