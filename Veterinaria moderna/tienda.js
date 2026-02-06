// tienda.js

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".category-btn");
  const cards = document.querySelectorAll(".product-card");

  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      buttons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;

      cards.forEach(card => {
        if (category === "all" || card.dataset.category === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });
});
