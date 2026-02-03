# SNEK Game

A classic snake game implementation built with HTML, CSS, and JavaScript.

[Play here](https://markoinla.github.io/snek/)

## Features
- Classic snake movement and gameplay
- Score tracking
- Responsive design

## How to Play
1. Run the dev server:
   - `npm install`
   - `npm run dev`
2. Open the printed local URL in your browser
2. Use arrow keys to control the snake
3. Collect food to grow and increase your score
4. Avoid hitting walls and your own tail

## Core Simulation
- Core logic runs deterministically and can be seeded with `?seed=123` in the URL.
- Core events drive visuals, audio, and UI.
- Headless smoke test: `npm run test:core`

## Core Events (Phase 2 Reference)
Core emits events used by the render layer:
- `PLAYER_DEAD`
- `FOOD_EATEN`, `FOOD_SPAWNED`
- `ENEMY_KILLED`, `ENEMY_RESPAWNED`
- `POWERUP_APPLIED`
- `ALPHA_MODE_ACTIVATED`, `ALPHA_MODE_ENDED`
- `SCORE_CHANGED`

## Directory Structure
- `/assets` - Contains game images and resources
- `/js` - JavaScript files for game logic
- `index.html` - Main game page
- `styles.css` - Game styling
