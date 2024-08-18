document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("btn-part");
  const content = document.getElementById("paymentForm");

  toggleButton.addEventListener("click", () => {
    if (content.classList.contains("hidden")) {
      content.classList.remove("hidden");
    } else {
      content.classList.add("hidden");
    }
  });
});
