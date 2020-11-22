"use strict";

const elForm = document.querySelector(".form");

elForm.addEventListener("submit", e => {
  e.preventDefault();
  console.log(elForm.name);
})