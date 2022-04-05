function usealtstuff() {
   window.addEventListener(
      "load",
      function () {
         var fixt = document.getElementById("right-space");
         if (fixt != null) {
            if (fixt.firstChild != "undefined") {
               while (fixt.firstChild) {
                  fixt.removeChild(fixt.firstChild);
               }
            }
            var ta = document.createElement("a");
            var ti = document.createElement("img");
            ta.href = "http://www.thehiveworks.com";
            ta.title = "The Hiveworks";
            ti.src = "//cdn.thehiveworks.com/images/hiveworks160600.png";
            ta.appendChild(ti);
            fixt.appendChild(ta);
         }

         var fixl = document.getElementById("top-space");
         if (fixl != null) {
            if (fixl.firstChild != "undefined") {
               while (fixl.firstChild) {
                  fixl.removeChild(fixl.firstChild);
               }
            }
            var la = document.createElement("a");
            var li = document.createElement("img");
            la.href = "https://www.thehiveworks.com";
            la.title = "The Hiveworks";
            li.src = "//cdn.thehiveworks.com/images/hiveworks72890.png";
            la.appendChild(li);
            fixl.appendChild(la);
         }

         var fixl2 = document.getElementById("top-space-mobile");
         if (fixl2 != null) {
            if (fixl2.firstChild != "undefined") {
               while (fixl2.firstChild) {
                  fixl2.removeChild(fixl2.firstChild);
               }
            }
            var xa = document.createElement("a");
            var xi = document.createElement("img");
            xa.href = "https://www.thehiveworks.com";
            xa.title = "The Hiveworks";
            xi.src = "//cdn.thehiveworks.com/images/hiveworks72890.png";
            xa.appendChild(xi);
            fixl2.appendChild(xa);
         }

         var fixb = document.getElementById("box-space");
         if (fixb != null) {
            if (fixb.firstChild != "undefined") {
               while (fixb.firstChild) {
                  fixb.removeChild(fixb.firstChild);
               }
            }
            var ba = document.createElement("a");
            var bi = document.createElement("img");
            ba.href = "https://www.thehiveworks.com";
            ba.title = "The Hiveworks";
            bi.src = "//cdn.thehiveworks.com/images/hiveworks30050.png";
            ba.appendChild(bi);
            fixb.appendChild(ba);
         }
      },
      false
   );
}
