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
