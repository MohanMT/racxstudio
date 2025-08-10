document.addEventListener('DOMContentLoaded', () => {
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    || window.innerWidth <= 1024
    || ('ontouchstart' in window);
  
  if (isMobile) {
    return;
  }
  
  let cursor = document.querySelector('.cursor');
  if (!cursor) {
    cursor = document.createElement('div');
    cursor.className = 'cursor';
    document.body.appendChild(cursor);
  }

  const circles = [];
  const numCircles = 8;
  
  for (let i = 0; i < numCircles; i += 1) {
    const circle = document.createElement('div');
    circle.className = 'circle';
    circle.style.opacity = ((numCircles - i) / numCircles) * 0.6;
    document.body.appendChild(circle);
    circles.push({
      element: circle,
      x: 0,
      y: 0,
    });
  }

  const coords = { x: 0, y: 0 };

  window.addEventListener('mousemove', (e) => {
    coords.x = e.clientX;
    coords.y = e.clientY;
    
    cursor.style.opacity = '1';
    circles.forEach((circleItem) => {
      const item = circleItem;
      item.element.style.opacity = item.element.style.opacity || '0.6';
    });
  });

  let hideTimeout;
  window.addEventListener('mousemove', () => {
    clearTimeout(hideTimeout);
    hideTimeout = setTimeout(() => {
      // isMoving = false;
    }, 100);
  });

  function animateCursor() {
    const { x, y } = coords;

    cursor.style.left = `${x - 10}px`;
    cursor.style.top = `${y - 10}px`;

    circles.forEach((circleItem, index) => {
      const item = circleItem;
      const delay = (index + 1) * 0.1;
      item.x += (x - item.x) * (0.3 - delay * 0.02);
      item.y += (y - item.y) * (0.3 - delay * 0.02);

      item.element.style.left = `${item.x - 12}px`;
      item.element.style.top = `${item.y - 12}px`;
      
      const scale = (circles.length - index) / circles.length;
      item.element.style.transform = `scale(${scale})`;
    });

    requestAnimationFrame(animateCursor);
  }

  animateCursor();

  const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
  
  interactiveElements.forEach((element) => {
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
