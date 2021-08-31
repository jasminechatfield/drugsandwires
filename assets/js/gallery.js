(function () {
   console.log("hello");
   const gallery = {
      items: document.getElementsByClassName("gallery__list__item"),
      doToggle: function (e) {
         e.target.classList.toggle("gallery__list__item__expanded");
         e.target.classList.toggle("gallery__list__item");
      }
   };
   console.log(gallery);
   Array.from(gallery.items).forEach((item) => {
      item.addEventListener("click", function (e) {
         console.log(e.target);
         console.log(e);
         gallery.doToggle(e);
      });
   });
})();
