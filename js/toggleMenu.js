function toggleMenu() {
  const cover = document.getElementById("cover");
  const menu = document.getElementById("menu");
  const button = document.getElementById("menu-button");
  const overlay = document.getElementById("overlay");
  const isOpen = cover.classList.contains("open");

  if (isOpen) {
    cover.classList.add("closing");
    menu.classList.add("closing");

    setTimeout(() => {
      cover.classList.remove("open", "closing");
      menu.classList.remove("closing");
      cover.style.display = "none";
      overlay.style.display = "none";
    }, 300);
  } else {
    cover.style.display = "block";
    overlay.style.display = "block";
    setTimeout(() => {
      cover.classList.add("open");
    }, 10);
  }

  if (isOpen) {
    button.classList.remove("fa-times");
    button.classList.add("fa-bars");
  } else {
    button.classList.remove("fa-bars");
    button.classList.add("fa-times");
  }
}

function closeMenu() {
  const cover = document.getElementById("cover");
  const menu = document.getElementById("menu");
  const button = document.getElementById("menu-button");
  const overlay = document.getElementById("overlay");

  cover.classList.add("closing");
  menu.classList.add("closing");

  setTimeout(() => {
    cover.classList.remove("open", "closing");
    menu.classList.remove("closing");
    cover.style.display = "none";
    overlay.style.display = "none";
  }, 300);

  button.classList.remove("fa-times");
  button.classList.add("fa-bars");
}
