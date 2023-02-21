var header__burger = document.querySelector(".header__burger");
var header__menu = document.querySelector(".header__menu");

if (header__burger) {
  header__burger.addEventListener("click", function () {
    if (header__burger.classList.contains("header__burger_active")) {
      header__burger.classList.remove("header__burger_active");
      header__menu.classList.remove("header__menu_active");
    } else {
      header__burger.classList.add("header__burger_active");
      header__menu.classList.add("header__menu_active");
    }
  });
}

var swiper = new Swiper(".personal-info", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var slider = new Swiper(".main-slider", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var mySwiper = new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-prev",
    prevEl: ".swiper-next",
  },
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
mySwiper.on("slideChange", function () {
  for (var _i = 0; _i < hiddenContent.length; _i++) {
    if (hiddenContent[_i].classList.contains("hidden-content--active")) {
      hiddenContent[_i].classList.remove("hidden-content--active");
    }

    buttonHide[_i].innerHTML = buttonHide[_i].dataset.show;

    removeSpan[_i].classList.remove("remove-span--active");
  }
});

var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
    breakpoints: {
    100: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    540: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

var accordion__question = document.querySelectorAll(".accordion__question");
accordion__question.forEach(function (el) {
  el.addEventListener("click", function (event) {
    event.preventDefault();
    var active = el.classList.contains("accordion__question_active");
    accordion__question.forEach(function (second) {
      var next = second.nextElementSibling;
      second.classList.remove("accordion__question_active");
      slideHide(next);
    });

    if (!active) {
      var next = el.nextElementSibling;
      el.classList.add("accordion__question_active");
      slideShow(next);
    }
  });
});

function slideToggle(e) {
  var time =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;

  if (getComputedStyle(e).display == "none") {
    slideShow(e, time);
  } else {
    slideHide(e, time);
  }
}
function slideShow(e) {
  var time =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  e.style.overflow = "hidden";

  if (getComputedStyle(e).display == "none") {
    e.style.display = "block";
    var h = +getComputedStyle(e).height.replace("px", "");
    setCss(e, "0px", "0px", "0px", "0px", "0px", "0px", "0px");
    setTimeout(function () {
      e.style.transition = time + "ms";
      setCss(e, h + "px");
    }, 0);
    setTimeout(function () {
      e.style.display = "block";
      setCss(e);
      e.style.overflow = "";
      e.style.transition = "";
    }, time);
  }
}
function slideHide(e) {
  var time =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  e.style.overflow = "hidden";

  if (getComputedStyle(e).display != "none") {
    var h = +getComputedStyle(e).height.replace("px", "");
    e.style.height = h + "px";
    setTimeout(function () {
      e.style.transition = time + "ms";
      setCss(e, "0px", "0px", "0px", "0px", "0px", "0px", "0px");
    }, 0);
    setTimeout(function () {
      e.style.display = "none";
      setCss(e);
      e.style.overflow = "";
      e.style.transition = "";
    }, time);
  }
}
function setCss(e) {
  var h =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  var pT =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
  var pB =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
  var mT =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
  var mB =
    arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
  var bT =
    arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
  var bB =
    arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : "";
  e.style.height = h;
  e.style.paddingTop = pT;
  e.style.paddingBottom = pB;
  e.style.marginTop = mT;
  e.style.marginBottom = mB;
  e.style.borderTopWidth = bT;
  e.style.borderBottomWidth = bB;
}

window.onscroll = function() {myFunction()};

var header = document.getElementById("masthead");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


