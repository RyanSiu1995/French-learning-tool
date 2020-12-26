"use strict";

window.number = Math.floor(Math.random() * 100);

function speak() {
  if (typeof speechSynthesis === 'undefined') {
    console.error("There is no speech synthesis API in this browser");
  } else {
    const utterThis = new SpeechSynthesisUtterance(window.number);
    utterThis.lang = "fr";
    speechSynthesis.speak(utterThis);
  }
}

function random() {
  window.number = Math.floor(Math.random() * 100);
}
