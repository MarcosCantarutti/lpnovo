let mobileToggle = document.querySelector('.navbar-toggler');
let navbarCollapse = document.querySelector('#navbar-links');
let mobileItens = document.querySelectorAll('.nav-link');

mobileItens.forEach(item => {
    item.addEventListener('click', event => {
        mobileToggle.classList.remove('collapsed');
        navbarCollapse.classList.remove('show');
    })
});