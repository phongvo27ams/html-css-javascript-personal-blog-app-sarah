// Show menu
const trigger = document.querySelector('.menu-trigger');
const addClass = document.querySelector('.site');
trigger.addEventListener('click', function() {
    addClass.classList.toggle('showmenu');
    document.body.classList.toggle('overflowme');
});

// Show sub-menu
const subMenu = document.querySelectorAll('.has-child > a');
subMenu.forEach((menu) => menu.addEventListener('click', toggle));

function toggle() {
    subMenu.forEach((item) => item != this ? item.classList.remove('expand') : null);
    if (this.parentNode.classList != 'expand') {
        this.parentNode.classList.toggle('expand');
    }
}

// Fixed Header
const nav = document.querySelector('.site > header');
function fixedNav() {
    if (window.scrollY > 1000) {
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');
    }
}
window.addEventListener('scroll', fixedNav);

// Search Pop-up
const search = document.querySelector('.search-trigger');
const close = document.querySelector('.search-close');
const theClass = document.querySelector('.site');
search.addEventListener('click', function() {
    theClass.classList.toggle('show-search');
})
close.addEventListener('click', function() {
    theClass.classList.remove('show-search');
})