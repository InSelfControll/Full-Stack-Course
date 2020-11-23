"use strict";

const elAll = document.querySelectorAll(".options");
//const elCpus = document.querySelectorAll(".amd-cpus");

function init() {
  if (!location.pathname.startsWith("/options")) {
    return ;
  }

  const id = location.pathname.split("/subjects").pop() - 1;
  if (!isNaN(id) && !elAll[id]) {
    return alert("Incorrect option");
  }

  const top = elAll[id].getBoundingClientRect().top;
  scroll(0, top)

  const bottom = elAll[id].getBoundingClientRect().bottom;
  scroll(0, bottom)
}


init();