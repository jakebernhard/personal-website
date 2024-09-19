var backdrop = document.querySelector(".backdrop");
var mobileNav = document.querySelector(".mobile_nav");
var navButton = document.querySelector(".nav_button");

backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open_nav");
  backdrop.classList.remove("open");
});

navButton.addEventListener("click", function () {
  mobileNav.classList.add("open_nav");
  backdrop.classList.add("open");
  console.log("clicked");
});
