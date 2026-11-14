// Highlight sirf ek card ko karne ka helper
  function highlight(card) {
    document.querySelectorAll(".card").forEach(c => c.classList.remove("highlight"));
    if (card) card.classList.add("highlight");
  }

  // DELETE: button se upar apna card dhoondo (closest)
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      card.remove();
    });
  });

  // NEXT: apne card ka agla sibling (nextElementSibling)
  document.querySelectorAll(".next-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      highlight(card.nextElementSibling); // agar agla nahi hai to null, kuch highlight nahi hoga
    });
  });

  // PREV: apne card ka pichla sibling (previousElementSibling)
  document.querySelectorAll(".prev-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const card = btn.closest(".card");
      highlight(card.previousElementSibling);
    });
  });