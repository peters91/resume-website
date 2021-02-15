"use strict";

(function() {
  window.addEventListener("load", init);

  function init() {
    document.querySelector(".register-form").classList.toggle("hidden");
    document.querySelector(".login-form a").addEventListener("click", showForm);
    document.querySelector(".register-form a").addEventListener("click", showForm);
    document.querySelector(".menu-toggle").addEventListener("click", showMenu);
 }

  function showForm() {
    document.querySelector(".login-form").classList.toggle("hidden");
    document.querySelector(".register-form").classList.toggle("hidden");
  }

  function showMenu() {
    for (let element of document.getElementsByClassName("nav-toggle")) {
      element.classList.toggle("nav-hide");
    }
   }

})();

