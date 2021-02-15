"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    document.querySelector(".register-form").classList.toggle("hidden");
    document.querySelector(".login-form a").addEventListener("click", showMenu);
    document.querySelector(".register-form a").addEventListener("click", showMenu);
 }

 function showMenu() {
  document.querySelector(".login-form").classList.toggle("hidden");
  document.querySelector(".register-form").classList.toggle("hidden");
 }

})();

