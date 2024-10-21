# Game App (TypeScript + Chakra UI)

This project is a React web application built with TypeScript and styled using **Chakra UI**. It allows users to browse, filter, search, and sort games. The games are fetched from an external API and displayed in a user-friendly interface. Users can filter by genre and platform, sort the list of games, and search for specific titles.

## Features

- Fetch games from an API and display them in a responsive UI.
- Filter games by **genre** and **platform**.
- Sort games by **release date**, **rating**, or **name**.
- Search games by title using a search bar.
- Styled with **Chakra UI** components.
- Fully typed using **TypeScript**.
- Responsive design for mobile and desktop views.

## Technologies Used

- **React** (with TypeScript): For building user interfaces.
- **Chakra UI**: For responsive, accessible UI components.
- **React Router**: For navigation between different views.
- **Axios/Fetch API**: For fetching data from the external API.
- **TypeScript**: For static type-checking and enforcing strong typing in the codebase.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- Node.js (v12 or later)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/alihatampouri/game-app
   cd game-app
2. Run `npm install` to install the required dependencies.
3. Run `npm run dev` to start the web server. 
3. Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first. 
4. Add the API key to **src/services/api-client.ts**
5. Run `npm run dev` to start the web server.