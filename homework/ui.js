"use strict";

const elGpus = document.querySelectorAll(".amd-gpus");
const elCpus = document.querySelectorAll(".cpus");

function init() {
  if (!location.pathname.startsWith("/gpu") || !location.pathname.startsWith("/cpu")) {
    return ;
  }

  const id = location.pathname.split("/").pop() - 1;
  if (!isNaN(id) && !elGpus[id] || !isNaN[id] && !elCpus[id]) {
    return alert("Incorrect option");
  }

  const top = elGpus[id].getBoundingClientRect().top;
  scroll(0, top)

  const bottom = elCpus[id].getBoundingClientRect().bottom;
  scroll(1, bottom)
}


init();