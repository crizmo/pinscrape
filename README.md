# Pinterest Scraper

A simple image scraper API for Pinterest boards.

![License](https://img.shields.io/github/license/crizmo/pinscrape)
![Issues](https://img.shields.io/github/issues/crizmo/pinscrape)
![Forks](https://img.shields.io/github/crizmo/pinscrape)
![Stars](https://img.shields.io/github/stars/crizmo/pinscrape)

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- Retrieve board information such as title and total number of pins.
- Extract URLs of images in a Pinterest board.
- Save the extracted URLs to a JSON file.

## Setup

1. Clone the repository:

    ```bash
        git clone https://github.com/kurizu/pinscrape.git
    ```

2. Install the dependencies:

    ```bash
        cd pinscrape
        npm install
    ```

## Usage
1. Run the scraper:

    ```bash
        npm start
    ```

2. Open your browser and navigate to http://localhost:3000.

3. Explore the provided API endpoints to get board information and image URLs.

## API Endpoints

### Params

Url takes **two** parameters

- **username** : Pinterest username

- **boardName** : Pinterest board name

### Example

- **URLs**
	- **home :**  http://localhost:3000/
	- **Info :**  http://localhost:3000/api/:username/:boardName/info
	- **Pins :**  http://localhost:3000/api/:username/:boardName/pins

- **To get Info** :

  - Go to `http://localhost:3000/api/kurizu/pookie/info` in your browser

- Result

  ```json
  {
    "title": "pookie",
    "totalPins": 233
  }
  ```

- To get pins
  - Go to `http://localhost:3000/api/kurizu/pookie/pins` in your browser

- **Result**

  ```json
  {
    "images": [
          {
              "src": "https://i.pinimg.com/280x280_RS/2e/2d/50/2e2d505f82e118adf0ac6e742e503d82.jpg",
              "alt": "Words"
          },
          {
              "src": "https://i.pinimg.com/564x/2f/8e/1e/2f8e1e44ebac2f3536c991524bfa114f.jpg",
              "alt": "  The Words, Cool Words, Favorite Quotes, Best Quotes, Love Quotes, Inspirational Quotes, Daily Quotes, Motivational, Pretty Words"
          },
          {

          },
          ...
    ]
  }

  ```

## License

Distributed under the MIT License. See `LICENSE` for more information.