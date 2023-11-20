# AniTrack

## Anime Series Viewer

This web application allows users to view information about top anime series and search for specific anime titles.

## Table of Contents

- [Functionality](#functionality)
- [Usage](#usage)
- [API](#api)
- [Installation](#installation)

## Functionality

### 1. Top Series

On Page Load of the landing page, the top anime series is fetched from the Jikan API and displays them in a responsive carousel.

### 2. Anime Search

This enables users to search for anime titles. It fetches the relevant data from the Jikan API and dynamically creates cards for each result.

### 3. Card Creation

Is responsible for dynamically creating Bootstrap cards for anime series. The cards are used mainly in the search results page.

## Usage

1. Open `index.html` in your web browser.
2. Enter the desired anime title in the search bar.
3. Click the "Search" button to view the results.

## API

This application uses the Jikan API to fetch anime series data. The base API URL is `https://api.jikan.moe/v4/`.

## Installation

Clone the repository and open the `index.html` file in a web browser. No additional installation is required.

To get all the relevant dependencies make sure to use:

    npm install 
