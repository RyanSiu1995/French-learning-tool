"use strict";

function speak() {
  if (typeof speechSynthesis === 'undefined') {
    console.error("There is no speech synthesis API in this browser");
  } else {
    var utterThis = new SpeechSynthesisUtterance("88");
    utterThis.lang = "fr";
    speechSynthesis.speak(utterThis);
  }
}
