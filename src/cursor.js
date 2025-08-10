// Initialize cursor effect when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Create cursor elements if they don't exist
  let cursor = document.querySelector('.cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
  }

  // Create multiple circles for trail effect
  const circles = [];
  const numCircles = 8;
  
  for (let i = 0; i < numCircles; i++) {
    let circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.opacity = (numCircles - i) / numCircles * 0.6;
    document.body.appendChild(circle);
    circles.push({
      element: circle,
      x: 0,
      y: 0
    });
  }

  const coords = { x: 0, y: 0 };
  let isMoving = false;

  // Update mouse coordinates
  window.addEventListener('mousemove', function(e) {
    coords.x = e.clientX;
    coords.y = e.clientY;
    isMoving = true;
    
    // Show cursor when moving
    cursor.style.opacity = '1';
    circles.forEach(circle => {
      circle.element.style.opacity = circle.element.style.opacity || '0.6';
    });
  });

  // Hide cursor when not moving
  let hideTimeout;
  window.addEventListener('mousemove', function() {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      isMoving = false;
    }, 100);
  });

  // Animate cursor and circles
  function animateCursor() {
    let x = coords.x;
    let y = coords.y;

    // Update main cursor position
    cursor.style.left = x - 10 + 'px';
    cursor.style.top = y - 10 + 'px';

    // Update circles with trailing effect
    circles.forEach((circle, index) => {
      // Smooth following animation
      const delay = (index + 1) * 0.1;
      circle.x += (x - circle.x) * (0.3 - delay * 0.02);
      circle.y += (y - circle.y) * (0.3 - delay * 0.02);

      circle.element.style.left = circle.x - 12 + 'px';
      circle.element.style.top = circle.y - 12 + 'px';
      
      // Scale effect
      const scale = (circles.length - index) / circles.length;
      circle.element.style.transform = `scale(${scale})`;
    });

    requestAnimationFrame(animateCursor);
  }

  // Start animation
  animateCursor();

  // Add hover effects for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
  
  interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = 'rgba(255, 107, 0, 0.8)';
    });
    
    element.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'rgba(255, 255, 255, 0.8)';
    });
  });
});
