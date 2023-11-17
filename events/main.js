require('dotenv').config({ path: '../.env' });
const { writeFileSync } = require('fs');


const url = `https://api.jikan.moe/v4/`;

function getAnimeById(animeId) {
    const animeId_UrlParams = `anime/${animeId}/full`;
    fetch(url + animeId_UrlParams).then(response => {
        if(response.ok) {
            return response.json();
        } else {
            throw new Error(`Network response was not ok: ${response.statusText}`);
        }
        }).then(data => {
            console.log(data);
        }).catch(error => {
            console.error('Error during fetch:', error.message);
    });
}

getAnimeById('1');







