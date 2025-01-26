// Star Mesh Animation
const canvas = document.getElementById('star-mesh');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const particleCount = 80;

class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Create Particles
for (let i = 0; i < particleCount; i++) {
  particles.push(new Particle());
}

// Animate
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(particle => {
    particle.update();
    particle.draw();
  });
  requestAnimationFrame(animate);
}

animate();

// Roadmap Toggle Description
const roadmapItems = document.querySelectorAll('.roadmap-item');

roadmapItems.forEach(item => {
  item.addEventListener('click', () => {
    const desc = item.nextElementSibling;
    desc.style.display = desc.style.display === 'block' ? 'none' : 'block';
  });
});
// Toggle Roadmap Description
function toggleDescription(id) {
  const description = document.getElementById(id);
  if (description.style.display === 'block') {
    description.style.display = 'none';
  } else {
    description.style.display = 'block';
  }
}
// Toggle Roadmap Description
function toggleDescription(id) {
  const description = document.getElementById(id);
  if (description.style.display === 'block') {
    description.style.display = 'none';
  } else {
    description.style.display = 'block';
  }
}

// Toggle Mobile Menu
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('open');
}

// Add Bounce Effect on Panel Click
const panels = document.querySelectorAll('.panel');
panels.forEach(panel => {
  panel.addEventListener('click', () => {
    panel.style.animation = 'bounce 0.6s ease';
    setTimeout(() => {
      panel.style.animation = '';
    }, 600);
  });
});