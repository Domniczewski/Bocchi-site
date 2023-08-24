let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
}

const sr = ScrollReveal ({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.bocchi-text', {delay:200, origin:'top'});
sr.reveal('.bocchi-img', {delay:450, origin:'top'});
sr.reveal('.icons', {delay:500, origin:'left'});
sr.reveal('.scroll-down', {delay:500, origin:'right'});