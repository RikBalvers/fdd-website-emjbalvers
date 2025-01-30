window.onscroll = function() {
  var button = document.getElementById("back-to-top");

  var heroHeight = document.getElementById("hero").offsetHeight;
  if (document.documentElement.scrollTop > heroHeight) {
    button.style.opacity = "1";
    button.style.pointerEvents = "auto";
  } else {
    button.style.opacity = "0";
    button.style.pointerEvents = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
