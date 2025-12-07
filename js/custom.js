$(document).ready(function() {

    // code to make text on home page type out
    var textToType = ["Hi, welcome to my website! My name is Izzy and I am a senior at NYU studying Math and Data Science. After I graduate I would love to work somewhere where I can use my skills in Data and Computer Science to help others, like a non-profit or in healthcare.",
                        "I am from Upstate New York but am currently located in Brooklyn. In my free time I like to read, play the violin and viola, and hike or go for walks.",
                        "I made this website using Bootstrap with HTML, CSS, and jQuery. Enjoy!"];
    var typingElement = document.getElementById("aboutMe");
    var lineIndex = 0;
    var charIndex = 0;
    function typeWriter() {
        if (lineIndex < textToType.length) {
            if (charIndex < textToType[lineIndex].length) {
                typingElement.innerHTML += textToType[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 25);
            }
            else {
                if (lineIndex != 2) {
                    typingElement.innerHTML += "<br><br>"
                }
                lineIndex++;
                charIndex = 0;
                setTimeout(typeWriter, 100);
            }
        } 
    }
    typeWriter();

});

