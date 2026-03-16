class ParticleSystem {
    constructor() {
        this.particles = [];
    }

    createParticles(element) {
        // Simple CSS animation instead of canvas
        element.style.animation = 'clickEffect 0.3s ease';
        setTimeout(() => {
            element.style.animation = '';
        }, 300);
    }
}

const particleSystem = new ParticleSystem();