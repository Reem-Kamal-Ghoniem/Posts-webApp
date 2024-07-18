# React Blog Posts App

A simple React application for displaying blog posts fetched from a public API, with features like filtering, pagination, and detailed post views.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)


## Demo

<p align="center">
  <img src="/Assets/1.PNG" alt="Main Page Screenshot" />
</p>

<p align="center">
  <img src="/Assets/2.PNG" alt="Post Details Screenshot" />
</p>

## Features

- Fetches and displays blog posts from a public API.
- Allows filtering posts by title.
- Pagination for navigating through posts.
- Clicking on a post displays its details including comments.
- Responsive design for various screen sizes.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/Reem-Kamal-Ghoniem/Posts-webApp.git
   cd react-posts-app

2. Install dependencies:
    ```bash
    npm install

Be patient it takes about 2min to start.

3. Set up environment variables:

- Change the config.js file

    ```bash
    API_URL = 'https://jsonplaceholder.typicode.com/';

- Replace https://jsonplaceholder.typicode.com with your API URL if using a different one.

4. Start the development server:

    ```bash
    npm start
5. Open your browser and visit http://localhost:3000 to view the app.


## Usage
1. use the search-bar to search for certaion post using its title.
2. click on the needed post to view its details.
3. the list of posts apperas as a sidebar, you can navigate through them using the pagination below the bar.

## Technologies Used
- React
- Axios
