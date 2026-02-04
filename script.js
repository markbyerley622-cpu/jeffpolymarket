// Cool animated background effects

// Create floating particles
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.id = 'particles';
    particlesContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 0;
        overflow: hidden;
    `;
    document.body.insertBefore(particlesContainer, document.body.firstChild);

    // Create 50 particles
    for (let i = 0; i < 50; i++) {
        createParticle(particlesContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    const size = Math.random() * 5 + 2;
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 20 + 10;
    const delay = Math.random() * 5;

    particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(139, 92, 246, ${Math.random() * 0.5 + 0.3});
        border-radius: 50%;
        left: ${startX}px;
        top: 100%;
        animation: float ${duration}s linear ${delay}s infinite;
        box-shadow: 0 0 ${size * 2}px rgba(139, 92, 246, 0.5);
    `;

    container.appendChild(particle);
}

// Add floating animation
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0% {
            transform: translateY(0) translateX(0) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) translateX(${Math.random() * 200 - 100}px) rotate(360deg);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% {
            opacity: 0.3;
        }
        50% {
            opacity: 0.8;
        }
    }

    .pulse-glow {
        animation: pulse 3s ease-in-out infinite;
    }
`;
document.head.appendChild(style);

// Mouse trail effect
let mouseX = 0;
let mouseY = 0;
const trail = [];
const trailLength = 10;

function createTrailElement() {
    const element = document.createElement('div');
    element.style.cssText = `
        position: fixed;
        width: 8px;
        height: 8px;
        background: radial-gradient(circle, rgba(245, 87, 108, 0.8), rgba(245, 87, 108, 0));
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.2s ease;
    `;
    document.body.appendChild(element);
    return element;
}

for (let i = 0; i < trailLength; i++) {
    trail.push(createTrailElement());
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function updateTrail() {
    trail.forEach((element, index) => {
        const delay = index * 0.05;
        setTimeout(() => {
            element.style.left = `${mouseX}px`;
            element.style.top = `${mouseY}px`;
            element.style.opacity = (1 - index / trailLength) * 0.5;
            element.style.transform = `scale(${1 - index / trailLength})`;
        }, delay * 1000);
    });
    requestAnimationFrame(updateTrail);
}

// Initialize effects when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        createParticles();
        updateTrail();
    });
} else {
    createParticles();
    updateTrail();
}

// Add glow effect to buttons on hover
document.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.add('pulse-glow');
    }
});

document.addEventListener('mouseout', (e) => {
    if (e.target.tagName === 'BUTTON') {
        e.target.classList.remove('pulse-glow');
    }
});

// Responsive particle count
window.addEventListener('resize', () => {
    const particlesContainer = document.getElementById('particles');
    if (particlesContainer) {
        particlesContainer.innerHTML = '';
        for (let i = 0; i < (window.innerWidth < 768 ? 20 : 50); i++) {
            createParticle(particlesContainer);
        }
    }
});
