# AfterLife – Conway's Game of Life Visualizer

An interactive implementation of Conway's Game of Life, built with pure HTML, CSS, and JavaScript.

![Game of Life Demo](https://img.shields.io/badge/demo-live-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow) ![HTML5](https://img.shields.io/badge/HTML5-canvas-orange)

## 🌱 What is the Game of Life?

The Game of Life is a cellular automaton devised by mathematician John Conway in 1970. It simulates how cells on a grid live, die, or multiply based on a set of simple rules. Despite its simplicity, the simulation can generate surprisingly complex and beautiful patterns that exhibit emergent behavior.

This zero-player game evolves entirely based on its initial state, requiring no further input from the user. The patterns that emerge can range from simple static shapes to complex oscillating structures and even patterns that move across the grid.

## ✨ Features

- **Interactive Grid**: Click cells to toggle between alive and dead states
- **Real-time Simulation**: Watch patterns evolve in real-time with smooth animations
- **Control Panel**: 
  - ▶️ **Start/Pause** – Control simulation playback
  - 🔄 **Reset** – Clear the grid and stop the simulation
  - 🎲 **Randomize** – Seed the grid with a random pattern
- **Adjustable Grid Size**: Explore patterns at different scales
- **Browser-based**: Runs directly in any modern web browser
- **Responsive Design**: Works on desktop and mobile devices
- **No Dependencies**: Built with vanilla JavaScript, no frameworks required

## 🛠️ Technologies Used

- **HTML5** – Structure and canvas rendering
- **CSS3** – Modern styling and responsive layout
- **JavaScript (ES6)** – Simulation logic and interactive controls
- **Canvas API** – High-performance grid rendering

## 📦 Getting Started

### Quick Start

1. **Clone the repository**:
   ```bash
   git clone https://github.com/XuanGiaHanNguyen/AfterLife.git
   cd AfterLife
   ```

2. **Open in browser**:
   ```bash
   # Simply open the index.html file in your preferred browser
   open index.html
   # Or on Windows
   start index.html
   # Or on Linux
   xdg-open index.html
   ```

3. **Start exploring**:
   - Click cells to create initial patterns
   - Try the randomize button for instant patterns
   - Press play to watch your creation evolve!

### No Installation Required!
This is a client-side application that runs entirely in your browser. No server setup, npm installs, or build processes needed.

## 🎮 How to Use

1. **Create Initial Pattern**: Click on cells to toggle them between alive (filled) and dead (empty)
2. **Start Simulation**: Click the "Start" button to begin the evolution
3. **Experiment**: 
   - Use "Randomize" to generate random starting patterns
   - "Reset" clears the grid for a fresh start
   - "Pause" to examine interesting formations
4. **Adjust Grid Size**: Use the controls to change the grid dimensions for different experiences

## 🧩 Rules of the Game

Each cell on the grid has two possible states: **alive** or **dead**. On each generation:

1. **Survival**: A live cell with 2 or 3 live neighbors survives to the next generation
2. **Birth**: A dead cell with exactly 3 live neighbors becomes alive
3. **Death**: All other live cells die (from underpopulation or overpopulation)
4. **Stasis**: All other dead cells remain dead

These simple rules create complex emergent behaviors and beautiful evolving patterns.

## 🔍 Interesting Patterns to Try

Try creating these classic patterns:

- **Blinker**: A simple 3-cell oscillator
  ```
  ■■■
  ```

- **Glider**: A pattern that moves across the grid
  ```
   ■
    ■
  ■■■
  ```

- **Block**: A stable 2×2 square that never changes
  ```
  ■■
  ■■
  ```

## 🏗️ Project Structure

```
AfterLife/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # Styling and layout
├── js/
│   ├── game.js         # Core game logic
│   ├── ui.js           # User interface controls
│   └── patterns.js     # Predefined patterns (if any)
├── README.md           # This file
└── LICENSE             # MIT License
```

## 🔮 Future Improvements

- [ ] **Custom Rule Sets**: Implement variations like HighLife, Seeds, or user-defined rules
- [ ] **Pattern Library**: Save and load famous Conway patterns (glider guns, pulsars, etc.)
- [ ] **Performance Optimization**: Implement requestAnimationFrame for smoother animations
- [ ] **Speed Controls**: Add simulation speed adjustment slider
- [ ] **Generation Counter**: Display current generation number
- [ ] **Zoom & Pan**: Navigate large grids with zoom and pan controls
- [ ] **Pattern Recognition**: Identify and highlight known patterns automatically
- [ ] **Export Functionality**: Save interesting patterns as images or data files

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Areas for Contribution
- Performance optimizations
- New pattern presets
- UI/UX improvements
- Mobile responsiveness enhancements
- Additional Conway variants

## 📚 Learn More

- [Conway's Game of Life - Wikipedia](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)
- [LifeWiki - Pattern Database](https://conwaylife.com/wiki/Main_Page)
- [Mathematical Games by Martin Gardner](https://web.stanford.edu/class/sts145/Library/life.pdf)

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).

```
MIT License

Copyright (c) 2024 XuanGiaHanNguyen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 🙏 Acknowledgments

- **John Conway** – Creator of the Game of Life
- **Martin Gardner** – Popularized the Game of Life in Scientific American
- The vibrant **Conway's Game of Life community** for pattern discoveries and variations

