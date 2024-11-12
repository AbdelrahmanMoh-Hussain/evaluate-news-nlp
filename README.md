# NLP Article Analysis Tool

This project is a web tool that allows users to perform Natural Language Processing (NLP) on articles or blogs from other websites, using the MeaningCloud API to analyze and classify text content. This tool identifies whether the content is subjective or objective and analyzes the tone (positive, neutral, or negative).

## Motivation

This project aims to give you a taste of the environment, tools, and structure commonly used in front-end development roles. By understanding each tool’s role within the project architecture, you'll gain insight into the moving parts of more complex industry setups, enabling you to quickly adapt to various project configurations.

## Project Overview

The tool lets users paste an article URL, after which the application fetches the article's content, analyzes it through the MeaningCloud API, and returns results showing:

- **Content type**: Whether the article is subjective (opinion-based) or objective (fact-based).
- **Tone analysis**: Determines if the content is positive, neutral, or negative.

## Prerequisites

To get started with this project, the following tools and technologies are used:

- **Node.js**: Acts as the web server for the application.
- **Express**: Provides a routing framework for handling requests and serving pages.
- **Webpack**: Manages build tasks, creating separate environments for development and production.
  - `webpack.dev.js` for development
  - `webpack.prod.js` for production
- **Service Worker**: A script that runs in the background to enable features like caching.
- **MeaningCloud API**: An external API used for NLP analysis, so you don’t need in-depth knowledge of NLP to complete the project.

## Getting Started

1. **Clone this repository** to your local machine.
2. **Install dependencies** by running:
   ```bash
   npm install

## Available Scripts
Here is the order of scripts to run for various tasks in the project:

### Run tests with Jest:
`npm run test`

### Start the server at src/server/index.js:
`npm start`

### Build the project for development using webpack.dev.js:
`npm run build-dev`

### Build the project for production using webpack.prod.js:
`npm run build-prod`
