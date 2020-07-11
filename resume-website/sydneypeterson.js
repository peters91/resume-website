"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    document.querySelector(".menu-toggle").addEventListener("click", showMenu);
 }

 function showMenu() {
  document.getElementById("resume").classList.toggle("nav-hide");
 }

})();
