document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const homeContent = document.querySelector('.home-content');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                homeContent.classList.add('active');
                observer.disconnect();
            }
        });
    });

    observer.observe(document.querySelector('#home'));
});

document.addEventListener('DOMContentLoaded', () => {
    const aboutContainer = document.querySelector('.about-container');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutContainer.classList.add('active');
                observer.disconnect();
            }
        });
    }, {
        threshold: 0.5
    });

    observer.observe(document.querySelector('#about'));
});