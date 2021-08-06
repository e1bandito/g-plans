let mainNavClose = function () {
  let closeBtn = document.querySelector('.main-nav__close');
  let mainNav = document.querySelector('.main-nav');
  let body = document.querySelector('body');


  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      body.classList.remove("body-lock");
      mainNav.classList.remove("main-nav--open");
    });
  }
};

let toggleDropdown = function () {
  let dropdownItems = document.querySelectorAll('.main-nav__item--dropdown');


  dropdownItems.forEach($el => {
    $el.addEventListener('click', function (e) {
      if (e.target.classList.contains('main-nav__link')) {
        this.classList.toggle('main-nav__item--dropdown-open');
      }
    })
  })
}

export  {mainNavClose, toggleDropdown};
