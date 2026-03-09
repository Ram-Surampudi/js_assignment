(function (window) {

  var helloSpeaker = {};
  var speakWord = "Hello";

  helloSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose to global window object
  window.helloSpeaker = helloSpeaker;

})(window);