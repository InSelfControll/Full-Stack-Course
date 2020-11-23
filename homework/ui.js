"use strict";

const elGpus = document.querySelectorAll(".amd-gpus");
const elCpus = document.querySelectorAll(".amd-cpus");

function init() {
  if (!location.pathname.startsWith("/gpu") && !location.pathname.startsWith("/cpu")) {
    return ;
  }

  const id = location.pathname.split("/Subjects").pop() - 1;
  if (!isNaN(id) && !elGpus[id] && !isNaN[id] && !elCpus[id]) {
    return alert("Incorrect option");
  }

  const top = elGpus[id].getBoundingClientRect().top;
  scroll(0, top)

  const bottom = elCpus[id].getBoundingClientRect().bottom;
  scroll(0, bottom)
}


init();