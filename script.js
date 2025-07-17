// Grid functionality
let clickedCount = 0;

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
  const totalCells = 40 * 25; // 300 cells

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
}

// Button functionality
document.addEventListener('DOMContentLoaded', function() {
    createGrid();
    
    // Clear button functionality
    document.getElementById("clearBtn").addEventListener("click", function () {
      console.log("Clear grid clicked");
      clearGrid();
    });

    // Simulate button functionality
    document.getElementById("simulateBtn").addEventListener("click", function () {
      console.log("Simulate clicked");
      // Add your simulate logic here
    });
});