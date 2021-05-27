// navbar toggle

const toggleBtn = document.getElementById('navbar-toggler');
const navDiv = document.querySelector('.navbar-collapse');

toggleBtn.addEventListener("click", function(){
    navDiv.classList.toggle('showNav');
    if(toggleBtn.firstElementChild.className = "fas fa-bars"){
        toggleBtn.firstElementChild.className= ("fas fa-times");
        document.body.style.overflow = "hidden";
    } else{
        toggleBtn.firstElementChild.className="fas fa-bars";
        document.body.style.overflow = "visible";
    }
});

// music 

var song = document.getElementById("song")
var icon = document.getElementById("pause")

icon.onclick = function(){
    if(song.paused){
        song.play();
        icon.src = "pause.png";
    }else{
        song.pause();
        icon.src = "play.png";
    }
    // song.play();
}

// animation stopper

let resizeTimer;
window.addEventListener('resize', function(){
    document.body.classList.add("resize-animation-stopper");
    clearTimeout(resizeTimer);
    resizeTimer = this.setTimeout(function(){
        document.body.classList.remove("resize-animation-stopper");
    }, 400);
})

// navigation in small screen 
const links = document.querySelectorAll('.nav-link');
links.forEach(function(link){
    link.addEventListener('click', function(){
        document.body.style.overflow = "visible";
        navDiv.classList.remove('showNav');
        toggleBtn.firstElementChild.className = "fas fa-bars";
    });
});

// review slider
var slideIndex = 1;
    showSlides(slideIndex);

    // Next/previous controls
    function plusSlides(n) {
    showSlides(slideIndex += n);
    }
    function currentSlide(n) {
    showSlides(slideIndex = n);
    }

    function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('review-item');
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
    }
// review ends
