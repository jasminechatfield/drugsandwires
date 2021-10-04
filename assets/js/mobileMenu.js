(function () {
   var hamburger = {
      toggle1: document.getElementById("header__menu__button"),
      toggle2: document.getElementById(
         "header__menu__navigation__button__container"
      ),
      nav: document.getElementById("header__menu__navigation"),
      doToggle: function (e) {
         this.nav.classList.toggle("hidden");
         this.nav.classList.toggle("unhidden");
      }
   };

   hamburger.toggle1.addEventListener("click", function (e) {
      hamburger.doToggle(e);
   });
   hamburger.toggle2.addEventListener("click", function (e) {
      hamburger.doToggle(e);
   });
})();
