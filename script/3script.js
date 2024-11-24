jQuery(document).ready(function ($) {
  var text = [
    "I am a frontend developer,",
    "a web artist",
    "in love with minimalism.",
    // 		"I love photography, ",
    // 		"science and good music.",
    "My thoughts are on twitter,",
    "and my works on .",
    "How can I help you?",
    "Some of my work:   ",
  ];

  var htmlElement = document.getElementById("text");
  var githubLink = document.getElementById("githubLink");

  var realisticTypewriter = new RealisticTypewriter();

  // 10% typo rate
  realisticTypewriter.accuracy = 94;

  // typing speed will be from 5 to 10 characters per second.
  realisticTypewriter.minimumCharactersPerSecond = 5;
  realisticTypewriter.maximumCharactersPerSecond = 10;

  // waits at least 0.5 second and at most 1 second before it starts typing
  realisticTypewriter.minimumInitialDelay = 500;
  realisticTypewriter.maximumInitialDelay = 1200;

  var letras = jQuery(".letra");

  function writeText(counter) {
    realisticTypewriter.type(text[counter], htmlElement, function () {
      if (counter < (text.length - 1)) {
        setTimeout(function () {
          counter++;
          document.getElementById("text").innerHTML = "";
          writeText(counter);
        }, 1000);
      } else {
        $("#portfolio, .email").delay(1500).fadeIn(500);
      }
    });
  }

  writeText(0);
});
