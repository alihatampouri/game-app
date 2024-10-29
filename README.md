# GameApp 🎮

GameApp is a responsive and user-friendly React application developed in TypeScript for browsing, filtering, and exploring video games through the RAWG API. The app enables users to search for games, filter by genre and platform, sort by various criteria, and dive into detailed game descriptions, trailers, and screenshots.

## Features ✨

- **Game Search and Browse**: Retrieve and explore a vast library of games from the RAWG API.
- **Filtering Options**: Filter games by genre (e.g., RPG, Shooter, Puzzle) and platform (e.g., PC, PlayStation, Xbox).
- **Sorting Capabilities**: Sort the game list by name, rating, release date, and other relevant metrics.
- **Detailed Game Information**: Access in-depth information for each game, including descriptions, key features, trailers, and screenshots.
- **Dark & Light Themes**: Choose between light and dark themes for a personalized visual experience.
- **Responsive Design**: Fully responsive interface for a seamless experience on mobile, tablet, and desktop.
  
## Technology Stack 🛠

- **React (TypeScript)**: Core framework built with React in TypeScript, ensuring type safety and a smoother development experience.
- **Chakra UI**: Modern and accessible UI component library for creating a sleek, intuitive interface.
- **React Query**: Data fetching and caching library to optimize API requests and avoid redundant calls, improving performance and responsiveness.
- **Zustand**: Lightweight state management for predictable state control and efficient updates.
- **React Router**: Enables seamless navigation across different pages within the app.

## Key Components 📑

1. **Search & Filter**:
   - Users can search for specific games by title, filter by genre and platform, and sort by various criteria.
   - Provides a tailored search experience with minimal delay due to optimized data fetching and caching with React Query.

2. **Game Detail View**:
   - Detailed view for each game, displaying descriptions, features, trailers, and screenshots.
   - Interactive and informative display for deeper user engagement.

3. **Theme Selection**:
   - Toggle between light and dark modes to match user preferences.
   - Chakra UI seamlessly adapts the UI to each theme, creating a visually consistent experience.

## Project Structure 📂

The code is organized to maintain a clean, modular, and scalable structure:

- **`/components`**: Reusable UI components, such as search bars, filters, and game cards.
- **`/data`**: The default data such as genre and platform.
- **`/hooks`**: Custom hooks for fetching, caching, and using data..
- **`/pages`**: Components representing each route (home, game details, etc.).
- **`/services`**: Services used in the application.
- **`/types`**: Interfaces and types used in TypeScript.

## Installation and Setup 🚀

Follow these steps to run the application locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/alihatampouri/game-app
   cd game-app
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Add API Key**:
   - Get a RAWG API key at https://rawg.io/apidocs. You'll have to create an account first.
   - Add the API key to **src/services/api-client.ts**

4. **Run the Application**:
   ```bash
   npm run dev
   ```
