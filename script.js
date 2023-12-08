let isDragging = false;
let initialX;
let box = document.getElementById('swipeBox');

box.style.transform = 'translateX(0)'

box.addEventListener('mousedown', startDrag);
box.addEventListener('touchstart', startDrag);

document.addEventListener('mousemove', drag);
document.addEventListener('touchmove', drag);

document.addEventListener('mouseup', stopDrag);
document.addEventListener('touchend', stopDrag);

function centerBox() {
  const windowWidth = window.innerWidth;
  const boxWidth = box.offsetWidth;
  offsetX = (windowWidth - boxWidth) / 2;
  box.style.transform = `translateX(${offsetX}px)`;
}

function startDrag(e) {
  isDragging = true;
  initialX = e.clientX || e.touches[0].clientX;

  e.preventDefault();
}

function drag(e) {
  if (!isDragging) return;

  const currentX = e.clientX || e.touches[0].clientX;
  const deltaX = currentX - initialX;

  box.style.transform = `translateX(${deltaX}px)`;
}

function stopDrag() {
  if (!isDragging) return;

  isDragging = false;

  // Check if box has moved off the screen
  const boxRect = box.getBoundingClientRect();
  const windowWidth = window.innerWidth;

  if (boxRect.right < 0 || boxRect.left > windowWidth) {
    // Remove the box from the DOM or perform any other action
    box.remove();
  } else {
    // Snap the box back to its initial position
    box.style.transform = 'translateX(0)';
  }
}
