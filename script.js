// Grid functionality
let clickedCount = 0;

// Game of Life simulation variables
let isSimulating = false;
let simulationInterval;
let grid = [];
const GRID_WIDTH = 40;
const GRID_HEIGHT = 25;

// Initialize grid array
function initializeGrid() {
  grid = [];
  for (let row = 0; row < GRID_HEIGHT; row++) {
    grid[row] = [];
    for (let col = 0; col < GRID_WIDTH; col++) {
      grid[row][col] = false;
    }
  }
}

// Convert cell index to row/col coordinates
function indexToCoords(index) {
  const row = Math.floor(index / GRID_WIDTH);
  const col = index % GRID_WIDTH;
  return { row, col };
}

// Convert row/col coordinates to cell index
function coordsToIndex(row, col) {
  return row * GRID_WIDTH + col;
}

// Count live neighbors for a cell
function countLiveNeighbors(row, col) {
  let count = 0;
  
  // Check all 8 surrounding cells
  for (let deltaRow = -1; deltaRow <= 1; deltaRow++) {
    for (let deltaCol = -1; deltaCol <= 1; deltaCol++) {
      // Skip the cell itself
      if (deltaRow === 0 && deltaCol === 0) continue;
      
      const neighborRow = row + deltaRow;
      const neighborCol = col + deltaCol;
      
      // Check if neighbor is within bounds
      if (neighborRow >= 0 && neighborRow < GRID_HEIGHT && 
          neighborCol >= 0 && neighborCol < GRID_WIDTH) {
        if (grid[neighborRow][neighborCol]) {
          count++;
        }
      }
    }
  }
  
  return count;
}

// Apply Conway's Game of Life rules
function getNextGeneration() {
  const newGrid = [];
  
  // Initialize new grid
  for (let row = 0; row < GRID_HEIGHT; row++) {
    newGrid[row] = [];
    for (let col = 0; col < GRID_WIDTH; col++) {
      const liveNeighbors = countLiveNeighbors(row, col);
      const isCurrentlyAlive = grid[row][col];
      
      // Apply the 4 rules of Conway's Game of Life
      if (isCurrentlyAlive) {
        // Rule 1: Live cell with < 2 neighbors dies (underpopulation)
        // Rule 2: Live cell with 2-3 neighbors survives
        // Rule 3: Live cell with > 3 neighbors dies (overpopulation)
        newGrid[row][col] = (liveNeighbors === 2 || liveNeighbors === 3);
      } else {
        // Rule 4: Dead cell with exactly 3 neighbors becomes alive (reproduction)
        newGrid[row][col] = (liveNeighbors === 3);
      }
    }
  }
  
  return newGrid;
}

// Update the visual grid based on the current state
function updateVisualGrid() {
  const cells = document.querySelectorAll('.grid-cell');
  let liveCount = 0;
  
  for (let row = 0; row < GRID_HEIGHT; row++) {
    for (let col = 0; col < GRID_WIDTH; col++) {
      const cellIndex = coordsToIndex(row, col);
      const cell = cells[cellIndex];
      
      if (grid[row][col]) {
        cell.classList.add('clicked');
        liveCount++;
      } else {
        cell.classList.remove('clicked');
      }
    }
  }
  
  clickedCount = liveCount;
  document.getElementById("clickedCount").textContent = clickedCount;
}

// Sync grid array with visual state
function syncGridWithVisual() {
  const cells = document.querySelectorAll('.grid-cell');
  
  for (let i = 0; i < cells.length; i++) {
    const { row, col } = indexToCoords(i);
    grid[row][col] = cells[i].classList.contains('clicked');
  }
}

// Single step of simulation
function simulateStep() {
  syncGridWithVisual();
  grid = getNextGeneration();
  updateVisualGrid();
}

// Start/stop simulation
function toggleSimulation() {
  const simulateBtn = document.getElementById("simulateBtn");
  
  if (!isSimulating) {
    // Start simulation
    isSimulating = true;
    simulateBtn.textContent = "Stop";
    simulateBtn.style.backgroundColor = "#dc2626";
    simulateBtn.style.borderColor = "#dc2626";
    
    // Run simulation at 10 FPS (100ms intervals)
    simulationInterval = setInterval(simulateStep, 100);
  } else {
    // Stop simulation
    isSimulating = false;
    simulateBtn.textContent = "Simulate";
    simulateBtn.style.backgroundColor = "#9b9b9b";
    simulateBtn.style.borderColor = "#9b9b9b";
    
    clearInterval(simulationInterval);
  }
}

// Make the popup draggable
let isDragging = false;
let currentX;
let currentY;
let initialX;
let initialY;
let xOffset = 0;
let yOffset = 0;

const popup = document.getElementById("gamePopup");

popup.addEventListener("mousedown", dragStart);
document.addEventListener("mousemove", dragMove);
document.addEventListener("mouseup", dragEnd);

function dragStart(e) {
  if (e.target.tagName === "BUTTON") return;

  initialX = e.clientX - xOffset;
  initialY = e.clientY - yOffset;

  if (e.target === popup || popup.contains(e.target)) {
    isDragging = true;
    popup.classList.add("dragging");
  }
}

function dragMove(e) {
  if (isDragging) {
    e.preventDefault();

    currentX = e.clientX - initialX;
    currentY = e.clientY - initialY;

    xOffset = currentX;
    yOffset = currentY;

    popup.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }
}

function dragEnd() {
  initialX = currentX;
  initialY = currentY;
  isDragging = false;
  popup.classList.remove("dragging");
}

// Grid creation function
function createGrid() {
  const container = document.getElementById("gridContainer");
  const totalCells = 40 * 25; // 1000 cells

  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "grid-cell";
    cell.addEventListener("click", function () {
      if (!this.classList.contains("clicked")) {
        this.classList.add("clicked");
        clickedCount++;
      } else {
        this.classList.remove("clicked");
        clickedCount--;
      }
      document.getElementById("clickedCount").textContent = clickedCount;
    });
    container.appendChild(cell);
  }
}

// Clear grid function
function clearGrid() {
  const cells = document.querySelectorAll(".grid-cell");
  cells.forEach((cell) => {
    cell.classList.remove("clicked");
  });
  clickedCount = 0;
  document.getElementById("clickedCount").textContent = clickedCount;
  
  // Stop simulation if running
  if (isSimulating) {
    toggleSimulation();
  }
}

// Button functionality
document.addEventListener('DOMContentLoaded', function() {
    initializeGrid();
    createGrid();
    
    // Clear button functionality
    document.getElementById("clearBtn").addEventListener("click", function () {
      console.log("Clear grid clicked");
      clearGrid();
    });

    // Simulate button functionality
    document.getElementById("simulateBtn").addEventListener("click", function () {
      console.log("Simulate clicked");
      toggleSimulation();
    });
});