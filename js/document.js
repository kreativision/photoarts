var sideNav;

function activate(btn) {
    var target = document.querySelector(`#${btn}`);
    var navBtns = document.querySelectorAll('.nav-wrapper a.btn-flat');
    navBtns.forEach(nav => {
        if (nav === target) {
            nav.classList.remove('darken-3');
        } else {
            nav.classList.add('darken-3');
        }
    });
}

document.addEventListener('DOMContentLoaded', function () {
    // this.sideNav = document.querySelectorAll('.sidenav');
    var elems = document.querySelectorAll('.sidenav');
    this.sideNav = M.Sidenav.init(elems, {});
});