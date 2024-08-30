// JavaScript to toggle the sign language videos visibility
document.getElementById('toggleSignLanguage').addEventListener('click', function () {
    const videoSection = document.querySelector('.sign-language-video');
    if (videoSection.style.display === 'none' || videoSection.style.display === '') {
        videoSection.style.display = 'block';
        this.textContent = 'Disable Sign Language';
    } else {
        videoSection.style.display = 'none';
        this.textContent = 'Enable Sign Language';
    }
});
