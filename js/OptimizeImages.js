document.addEventListener("DOMContentLoaded", () => {
  if ("caches" in window) {
    caches.open("image-cache").then((cache) => {
      document.querySelectorAll("img").forEach((img) => {
        img.classList.add("loading");
        cache.match(img.src).then((response) => {
          if (!response) {
            cache.add(img.src).then(() => {
              img.classList.remove("loading");
            });
          } else {
            img.src = response.url;
            img.classList.remove("loading");
          }
        });
      });
    });
  }
});
