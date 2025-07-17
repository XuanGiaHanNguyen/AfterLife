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

// Button functionality placeholders
document.getElementById("clearBtn").addEventListener("click", function () {
  console.log("Clear grid clicked");
  // Add your clear grid logic here
});

document.getElementById("simulateBtn").addEventListener("click", function () {
  console.log("Simulate clicked");
  // Add your simulate logic here
});
