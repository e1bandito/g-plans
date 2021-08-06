let burger = function (button, nav) {
  let burgerBtn = document.querySelector(button);
  let navigation = document.querySelector(nav);
  let body = document.querySelector("body");

  if (burgerBtn) {
    burgerBtn.addEventListener("click", function () {
      body.classList.add("body-lock");
      navigation.classList.add("main-nav--open");
    });
  }
};

export default burger;
