function toggleMenu() {
  const cover = document.getElementById("cover");
  const menu = document.getElementById("menu");
  const button = document.getElementById("menu-button");
  // const buttonBall = document.getElementById("menu-ball");
  // const cover = document.querySelector(".cover");
  const isOpen = cover.classList.contains("open");

  if (isOpen) {
    // Sluit het menu
    cover.classList.add("closing");
    menu.classList.add("closing");
    // buttonBall.classList.remove("open"); // Verwijder de open-klasse van de knop

    // Wacht tot de animatie voltooid is voordat het menu wordt verborgen
    setTimeout(() => {
      cover.classList.remove("open", "closing");
      menu.classList.remove("closing");
      cover.style.display = "none";
      // buttonBall.classList.remove("open"); // Verwijder de open-klasse van de knop
  }, 300); // Duur van de sluit-animatie

  } else {
    // Open het menu
    cover.style.display = "block";
    setTimeout(() => {
      cover.classList.add("open");
      // buttonBall.classList.add("open"); // Voeg de open-klasse toe aan de knop
    }, 10); // Kleine vertraging voor de animatie

  }

  // Wissel het icoon
  if (isOpen) {
    button.classList.remove("fa-times");
    button.classList.add("fa-bars");
  } else {
    button.classList.remove("fa-bars");
    button.classList.add("fa-times");
  }
}
