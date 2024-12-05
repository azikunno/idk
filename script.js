// Get references to Azi (Pac-Man) and Dea (Cell)
const azi = document.getElementById('azi');
const dea = document.getElementById('dea');

// Set initial positions
let aziPosition = { x: 100, y: 100 };
let deaPosition = { x: 40, y: 40 };

// Update Pac-Man's position on the screen
function updateAziPosition() {
  azi.style.left = aziPosition.x + 'px';
  azi.style.top = aziPosition.y + 'px';
}

// Update Cell's position on the screen
function updateDeaPosition() {
  dea.style.left = deaPosition.x + 'px';
  dea.style.top = deaPosition.y + 'px';
}

// Drag Pac-Man (Azi) functionality
let isDragging = false;
let offsetX, offsetY;

azi.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - aziPosition.x;
  offsetY = e.clientY - aziPosition.y;
  azi.style.cursor = 'grabbing';
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    aziPosition.x = e.clientX - offsetX;
    aziPosition.y = e.clientY - offsetY;
    updateAziPosition();
    checkCollision();
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  azi.style.cursor = 'grab';
});

// Check for collision between Pac-Man (Azi) and the Cell (Dea)
function checkCollision() {
  const aziRect = azi.getBoundingClientRect();
  const deaRect = dea.getBoundingClientRect();

  // If Pac-Man collides with the Cell
  if (
    aziRect.left < deaRect.right &&
    aziRect.right > deaRect.left &&
    aziRect.top < deaRect.bottom &&
    aziRect.bottom > deaRect.top
  ) {
    // Log the collision and reset the position of Dea (Cell)
    console.log("Azi eats Dea!");
    deaPosition.x = Math.random() * (window.innerWidth - 50); // Random position
    deaPosition.y = Math.random() * (window.innerHeight - 50); // Random position
    updateDeaPosition();
  }
}

// Initialize positions
updateAziPosition();
updateDeaPosition();