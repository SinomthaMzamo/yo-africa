document.addEventListener('DOMContentLoaded', function() {
    const dots = document.querySelectorAll('.dot');
    const pages = document.querySelectorAll('.page');

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            scrollToPage(index);
        });
    });

    function scrollToPage(index) {
        pages[index].scrollIntoView({ behavior: 'smooth' });

        // Update active dot indicator
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }
});
