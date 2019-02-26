var slideindex = 0;
Goslide(slideindex);

function plusslides(n) {
    Goslide(slideindex += n)
}

function selectorside(n) {
    Goslide(slideindex = n)
}

function Goslide(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n >= slides.length) { slideindex = 0 };
    if (n < 0) { slideindex = slides.length };
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dotclick", "")
    }

    slides[slideindex].style.display = " block ";
    dots[slideindex].className += " dotclick ";
}