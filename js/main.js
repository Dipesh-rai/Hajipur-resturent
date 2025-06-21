const header = document.querySelector('.site-header');
let isScrolled = false;
window.addEventListener('scroll',()=> {
    if (window.scrollY > 50 && !isScrolled) {
        header.classList.add('scrolled');
        isScrolled = true;
    } else if(window.scrollY < 10 && isScrolled){
        header.classList.remove('scrolled');
        isScrolled = false;
    }
})