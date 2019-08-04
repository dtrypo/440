function menu(x) {
    x.classList.toggle("change");
    const menu = document.querySelector('.menu-container-mobile');
    if (x.classList.contains('change')) {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
    
}