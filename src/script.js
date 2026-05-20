// Smooth Scroll para los links del navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto hover en tarjetas de servicios
const servicioCards = document.querySelectorAll('.servicio-card');
servicioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Manejo del formulario de contacto
const contactoForm = document.getElementById('contactoForm');
if (contactoForm) {
    contactoForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener valores
        const nombre = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const mensaje = this.querySelector('textarea').value;
        
        // Validación básica
        if (nombre.trim() && email.trim() && mensaje.trim()) {
            // Mostrar mensaje de éxito
            const submitButton = this.querySelector('.submit-button');
            const originalText = submitButton.textContent;
            
            submitButton.textContent = '¡Mensaje enviado! ✓';
            submitButton.style.background = 'linear-gradient(135deg, #10b981, #059669)';
            
            // Limpiar formulario
            this.reset();
            
            // Restaurar botón después de 3 segundos
            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.style.background = '';
            }, 3000);
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}

// Animación de entrada al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'slideInLeft 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observar elementos
document.querySelectorAll('.servicio-card, .proyecto-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// Efecto parallax en la sección hero
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrollPosition = window.pageYOffset;
    
    if (hero && scrollPosition < 800) {
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Animación al hacer hover en proyectos
const proyectos = document.querySelectorAll('.proyecto-item');
proyectos.forEach(proyecto => {
    proyecto.addEventListener('mouseenter', function() {
        this.querySelector('.proyecto-imagen').style.transform = 'scale(1.1)';
    });
    
    proyecto.addEventListener('mouseleave', function() {
        this.querySelector('.proyecto-imagen').style.transform = 'scale(1)';
    });
});

// Activar link del navbar al hacer scroll
window.addEventListener('scroll', function() {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.style.color = 'var(--color-primary)';
        } else {
            link.style.color = '';
        }
    });
});

// Contador de visitantes simulado
let visitCount = localStorage.getItem('visitCount') || 0;
visitCount++;
localStorage.setItem('visitCount', visitCount);

console.log(`Visita número: ${visitCount}`);

// Efecto botón CTA
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', function() {
        const servicios = document.querySelector('#servicios');
        servicios.scrollIntoView({ behavior: 'smooth' });
    });
}

// Animación de carga de página
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('¡Página cargada exitosamente!');
});

// Agregar clase de animación inicial
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease-in';
