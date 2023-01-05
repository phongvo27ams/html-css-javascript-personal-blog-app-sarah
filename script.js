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