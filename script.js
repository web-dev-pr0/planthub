const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 1) {
    navbar.style.transition = "background-color 0.3s ease";
    navbar.style.backgroundColor = "#177c4c";
    navbar.style.borderBottom = "1px #0c3922 solid";
  } else {
    navbar.style.transition = "background-color 0.3s ease";
    navbar.style.backgroundColor = "transparent";
    navbar.style.borderBottom = "none";
  }
});

const servicesButton = document.getElementById("services-button");
const cardSection = document.getElementById("cards");

servicesButton.addEventListener("click", function (e) {
  e.preventDefault();

  const cardSectionPosition = cardSection.getBoundingClientRect().top;

  window.scrollTo({
    top: cardSectionPosition - 50,
  });
});
