const card = document.querySelector(".card");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 50) {
    card.style.transform = "translateY(0)";
  } else {
    card.style.transform = "translateY(70%)";
  }
});