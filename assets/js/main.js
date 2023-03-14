const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {

    /* const body = document.querySelector('body');
    body.classList.toggle('no-scroll'); */

    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

const menuLinks = document.querySelectorAll('#nav a');
menuLinks.forEach(function(menuLink) {
  menuLink.addEventListener('click', toggleMenu);
});