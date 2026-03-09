(function (window) {

  var byeSpeaker = {};
  var speakWord = "Good Bye";

  byeSpeaker.speak = function (name) {
    console.log(speakWord + " " + name);
  };

  // Expose to global window object
  window.byeSpeaker = byeSpeaker;

})(window);