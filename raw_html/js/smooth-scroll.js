const scrollContainer = document.getElementById('scroll-container');

document.querySelectorAll('nav a').forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDhrefst();
        const href = link.getAttribute('href');
        const section = document.getElementById(href.replace('#', ''));
        scrollContainer.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    });
});