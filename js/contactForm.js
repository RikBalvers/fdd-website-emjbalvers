function showPopup(event) {
  event.preventDefault();
  const form = event.target;
  const popup = document.getElementById("popup");

  fetch(form.action, {
    method: form.method,
    body: new FormData(form),
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        popup.classList.add("show");
        setTimeout(() => {
          popup.classList.remove("show");
        }, 3000);
        form.reset();
      } else {
        alert("Er is iets misgegaan. Probeer het opnieuw.");
      }
    })
    .catch((error) => {
      alert("Er is iets misgegaan. Probeer het opnieuw.");
    });
}
