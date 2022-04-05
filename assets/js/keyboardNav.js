(function () {
   window.addEventListener("keydown", function (event) {
      const key = event.key; // "ArrowRight", "ArrowLeft", "ArrowUp", or "ArrowDown"
      const prevButton = document.getElementById("prev");
      const nextButton = document.getElementById("next");
      switch (key) {
         case "Left":
         case "ArrowLeft":
            // Go to previous page
            if (prevButton !== null) prevButton.click();
            break;
         case "Right":
         case "ArrowRight":
            // Go to next page
            if (nextButton !== null) nextButton.click();
            break;
      }
   });
})();
