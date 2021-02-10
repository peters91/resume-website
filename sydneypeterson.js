<<<<<<< HEAD
"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    document.querySelector(".menu-toggle").addEventListener("click", showMenu);
 }

 function showMenu() {
  for (let element of document.getElementsByClassName("nav-toggle")) {
    element.classList.toggle("nav-hide");
  }
 }

})();
=======
"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    document.querySelector(".menu-toggle").addEventListener("click", showMenu);
 }

 function showMenu() {
  for (let element of document.getElementsByClassName("nav-toggle")) {
    element.classList.toggle("nav-hide");
  }
 }

})();
>>>>>>> 4d1c0e4db3a562bf65fca8d168ff7c41d9ce930a
