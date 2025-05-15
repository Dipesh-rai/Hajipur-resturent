const header = document.getElementById('header');
window.addEventListener('scroll', function () {
    if (this.window.scrollY > 50) {
        header.classList.add('background');
    } else {
        header.classList.remove('background');
    }
})