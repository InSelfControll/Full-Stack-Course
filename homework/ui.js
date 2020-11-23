"use strict";

console.log(location)

if (location.pathname.startsWith("/gpu")) {
  console.log("Has GPU")
}

console.log("Doesn't have GPU")