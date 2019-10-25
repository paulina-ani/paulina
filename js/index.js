var slideIndex = 1;
var showNext = true;
var showNextArrow = true;
var myTimer;
var arrows = document.querySelector(".hero__arrows");
var hero = document.querySelector(".hero");
var buttonTop = document.getElementById("buttonTop");
var navSection = document.getElementById("nav");

window.addEventListener("load", function() {
  showSlides(slideIndex);
  myTimer = setInterval(function() {
    plusSlides(1);
  }, 4000);
});

window.addEventListener("load", function() {
  leftTextMove();
  //rightTextMove();
});

window.onscroll = function() {
  scrollVisible();
};

function myBurger() {
  if (navSection.className === "nav") {
    navSection.className += " responsive";
  } else {
    navSection.className = "nav";
  }
}

function plusSlides(n) {
  clearInterval(myTimer);
  if (n < 0) {
    showSlides((slideIndex -= 1));
  } else {
    showSlides((slideIndex += 1));
  }
  if (n === -1) {
    myTimer = setInterval(function() {
      plusSlides(n + 2);
    }, 4000);
  } else {
    myTimer = setInterval(function() {
      plusSlides(n + 1);
    }, 4000);
  }
}

function currentSlide(n) {
  clearInterval(myTimer);
  myTimer = setInterval(function() {
    plusSlides(n + 1);
  }, 4000);
  showSlides((slideIndex = n));
}
setTimeout(showSlides, 3000);

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hero__slides");
  var dots = document.getElementsByClassName("hero__dots--dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

hero.addEventListener("mouseover", function() {
  arrows.style.display = "flex";
  arrows.style.justifyContent = "space-between";
});

hero.addEventListener("mouseout", function() {
  arrows.style.display = "none";
});

function leftTextMove() {
  var textTitle = document.getElementById("hero__text--title");
  var textProfession = document.getElementById("hero__text--profession");
  var textName = document.getElementById("hero__text--name");
  var position = 0;
  var id = setInterval(leftMove, 20);
  function leftMove() {
    if (position === 37) {
      clearInterval(id);
    } else {
      position++;
      textName.style.left = position + "%";
      textTitle.style.left = position + "%";
      textProfession.style.left = position + "%";
    }
  }
}

function isInViewport(elem) {
  var bounding = elem.getBoundingClientRect();
  return (
    bounding.top >= 0 &&
    bounding.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
  );
}

function scrollVisible() {
  if (isInViewport(navSection)) {
    buttonTop.style.display = "block";
  } else {
    buttonTop.style.display = "none";
  }
}

function buttonUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
