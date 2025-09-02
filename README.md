AfterLife – Conway’s Game of Life Visualizer

An interactive implementation of Conway’s Game of Life, built with pure HTML, CSS, and JavaScript.

🌱 What is the Game of Life?

The Game of Life is a cellular automaton devised by mathematician John Conway. It simulates how cells on a grid live, die, or multiply based on a set of simple rules. Despite its simplicity, the simulation can generate surprisingly complex and beautiful patterns.

✨ Features

Interactive grid-based simulation rendered in the browser.

Start, pause, and reset controls for the simulation.

Randomize button to seed the grid with a random pattern.

Adjustable grid size for exploring different scales.

Runs directly in the browser — no installation required.

🚀 Live Demo

👉 Try it here

🛠️ Technologies Used

HTML5 – Structure and canvas rendering.

CSS3 – Layout and styling.

JavaScript (ES6) – Simulation logic and DOM interactions.

📦 Getting Started

To run locally:

Clone the repository:

git clone https://github.com/XuanGiaHanNguyen/AfterLife.git


Open index.html in your browser.

No additional setup required!

🧩 Rules of the Game

Each cell on the grid has two possible states: alive or dead. On each step:

A live cell with 2 or 3 neighbors survives.

A dead cell with exactly 3 neighbors becomes alive.

All other cells die or remain dead.

🔮 Possible Improvements

Add custom rule sets (e.g., HighLife, Seeds).

Implement pattern saving & loading (e.g., glider gun).

Performance optimization with requestAnimationFrame.

Add speed controls for simulation playback.

📜 License

This project is open-source and available under the MIT License
.
