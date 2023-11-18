require('dotenv').config({ path: '../.env' });
const { writeFileSync } = require('fs');
const fs = require('fs');
const axios = require('axios');


const apiUrl = `https://api.jikan.moe/v4/`;

function getAnimeById(animeId) {
    axios.get(`https://api.jikan.moe/v4/anime/${animeId}/full`)
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error during fetch:', error.message);
        });
}

getAnimeById('28223');

function getTopAnime() {
    axios.get('https://api.jikan.moe/v4/top/anime')
    .then(response => {
        if(response.status === 200) {
        return response.data;
        } else {
        throw new Error(`Network response was not ok: ${response.statusText}`);
        }
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('Error during fetch:', error.message);
    });
}

function animeSearch(anime) {
    axios.get(`https://api.jikan.moe/v4/anime?q=${anime}&order_by=title&sort=asc`)
    .then(response => {
        if(response.status === 200) {
        console.log(response.data);
        } else {
        throw new Error(`Network response was not ok: ${response.statusText}`);
        }
    })
}

// animeSearch('naruto');


