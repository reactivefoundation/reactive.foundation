function scrollAdjust() { //scrolling
  const padding = 50; //page padding 
  const offset = -1 * padding;
  const shiftWindow = function() { scrollBy(0, offset); }
  window.addEventListener("hashchange", shiftWindow);
  window.addEventListener("pageshow", shiftWindow);
}

function navbarBurger() {
  $(".navbar-burger").click(function() {
    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });
}

$(function() { //function start
  scrollAdjust(); //Scroll Page Option
  navbarBurger();
});

function externalLinks() { //External Links 
  for(var c = document.getElementsByTagName("a"), a = 0;a < c.length;a++) { var b = c[a]; b.getAttribute("href") && b.hostname !== location.hostname && (b.target = "_blank") } } ; externalLinks();
