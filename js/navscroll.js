const menu = document.querySelector('nav');

function actveScroll(){
    menu.classList.toggle('sumiu', scrollY < 500)
}

window.addEventListener('scroll', actveScroll);