const navBarBtnIcon = document.querySelector(".dropdown-btn-icon");
navBarBtnIcon.addEventListener(
  "touchstart",
  function() {
    event.preventDefault();
    navBarBtnIcon.classList.toggle("dropdown-btn-icon--active");
    if (document.querySelector(".vertical-item--active")) {
      document
        .querySelector(".vertical-item--active")
        .classList.toggle("vertical-item--active");
    }
    document
      .querySelector(".header-navigation-vertical-navbar")
      .classList.toggle("header-navigation-vertical-navbar--active");
  },
  false
);

const verticalNavBar = document.querySelector(
  ".header-navigation-vertical-navbar"
);
verticalNavBar.addEventListener(
  "touchstart",
  function(event) {
    event.preventDefault();
    if (event.target.className === "vertical-item") {
      if (document.querySelector(".vertical-item--active")) {
        document
          .querySelector(".vertical-item--active")
          .classList.toggle("vertical-item--active");
      }
      event.target.classList.toggle("vertical-item--active");
    }
  },
  false
);

const headerLogo = document.querySelector(".header-navigation-logo");
headerLogo.addEventListener(
  "touchstart",
  function(event) {
    event.preventDefault();
    if (
      event.target.className.includes("logo_img") ||
      event.target.className.includes("logo-text")
    ) {
      document.querySelector(".logo-img").classList.toggle("logo-img--active");
      document
        .querySelector(".logo-text")
        .classList.toggle("logo-text--active");
    }
  },
  false
);

const navBarBtn = document.querySelector(".navbar-btn");
navBarBtn.addEventListener(
  "touchstart",
  function() {
    event.preventDefault();
    navBarBtn.classList.toggle("navbar-btn--active");
  },
  false
);

const downloadBtn = document.querySelector(".download-btn");
downloadBtn.addEventListener(
  "touchstart",
  function() {
    event.preventDefault();
    downloadBtn.classList.toggle("download-btn--active");
  },
  false
);

const headerMenuNavBar = document.querySelector(".navbar");
headerMenuNavBar.addEventListener(
  "touchstart",
  function(event) {
    event.preventDefault();
    if (event.target.className === "navbar-item") {
      if (document.querySelector(".navbar-item--active")) {
        document
          .querySelector(".nav-bar-item--active")
          .classList.toggle("navbar-item--active");
      }
      event.target.classList.toggle("navbar-item--active");
    }
  },
  false
);

const pricingBtn = document.querySelector(".pricing-container");
pricingBtn.addEventListener(
  "touchstart",
  function(event) {
    event.preventDefault();
    if (event.target.className === "pricing-item-btn") {
      if (document.querySelector(".pricing-item-btn--active")) {
        document
          .querySelector(".pricing-item-btn--active")
          .classList.toggle("pricing-item-btn--active");
      }
      event.target.classList.toggle("pricing-item-btn--active");
    }
  },
  false
);
