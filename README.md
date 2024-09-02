# Basalam Game using React + Typescript + vite

This is a simple game built using React, TypeScript, and Vite. The objective of the game is to find all matching pairs of product images within a limited number of moves and time.

## Features

- **Time Limit:** Players have 2 minutes (120 seconds) to complete the game.
- **Move Limit:** Players are allowed a limited number of moves (40 moves by default).
- **Card Matching:** Click on cards to reveal the product images. If two cards match, they remain face-up; otherwise, they flip back after a brief delay.
- **Preview Mode:** All cards are briefly revealed to the player for 3 seconds at the start of the game.
- **Randomized Board:** The cards are shuffled randomly at the start of each game.
- **Restart Functionality:** A "Restart" button allows players to reset the game at any time.

## Project Setup

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (version 16 or above)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/memory-game.git
   cd memory-game

   ```

2. **Development**
   To start the development server:

Using npm:

```bash
npm run dev
```

Or using Yarn:

```bash
yarn dev
```

This will start the Vite development server, and you can view the game in your browser at http://localhost:5173.

Building for Production
To create a production build of the project:

Using npm:

```bash
npm run build
```

Or using Yarn:

```bash
yarn build
```

The output will be in the dist folder, which can be served using any static site server.

Testing the Production Build
To preview the production build locally:

Using npm:

```bash
npm run serve
```

Or using Yarn:

```bash
yarn serve
```

Project Structure

- **src/components/:** Contains the React components used in the game.
- **src/constants/:** Contains the image data for the products.
- **src/utils/:** Contains utility functions such as image shuffling and alert displays.
- **src/types/:** Contains global and shared TypeScript types.
- **src/assets/:** Contains the product images.
- **src/App.tsx:** The main entry point for the app.
- **src/store.ts/:** Contains the reducer logic for managing game state.
- **vite.config.ts:** Vite configuration file.
  Configuration
  Dynamic Image List
  You can set the list of product images dynamically by modifying the basalamProducts array located in the src/constants/index.ts file. The images are automatically shuffled when the game starts.

```bash
export const basalamProducts: ImageData[] = [
  { key: 1, src: "/images/product-1.jpg" },
  { key: 2, src: "/images/product-2.jpg" },
  { key: 3, src: "/images/product-3.jpg" },
  { key: 4, src: "/images/product-4.jpg" },
  { key: 5, src: "/images/product-5.jpg" },
  { key: 6, src: "/images/product-6.jpg" },
  { key: 7, src: "/images/product-7.jpg" },
  { key: 8, src: "/images/product-8.jpg" },
];
```

In the reducer's initial state:

```bash
import { basalamProducts } from '../constants';
import { shuffleImages } from '../utils';

const initialState: State = {
  images: shuffleImages(basalamProducts),
  timeLeft: 120, // Time in seconds
  userSteps: 40, // Number of allowed moves
  // other states...
};
```

Dynamic Configuration
You can dynamically change the following properties in the src/store.ts file:

timeLeft: Set the initial countdown time (in seconds).
userSteps: Set the initial number of moves allowed.

**Contact Information**

- **Phone Number:** 09378258014
- **LinkedIn:** https://www.linkedin.com/in/mmsadati/
- **GitHub:** https://github.com/mmsadati
