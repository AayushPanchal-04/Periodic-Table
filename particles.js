<<<<<<< HEAD
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

=======
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

>>>>>>> 24f8b77f7d1c62a961bb7f9a5f9a0f883368136a
const particleSystem = new ParticleSystem();