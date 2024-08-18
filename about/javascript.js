AOS.init();
// Phone navbar
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const Navlink = document.getElementById("navlinks");

  menuToggle.addEventListener("click", () => {
    Navlink.classList.toggle("active");
  });
});
