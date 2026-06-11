const revealButton = document.getElementById("revealButton");
const revealPanel = document.getElementById("revealPanel");

revealButton.addEventListener("click", () => {
  const isExpanded = revealButton.getAttribute("aria-expanded") === "true";

  if (isExpanded) {
    return;
  }

  revealButton.setAttribute("aria-expanded", "true");
  revealButton.classList.add("is-open");
  revealPanel.hidden = false;

  requestAnimationFrame(() => {
    revealPanel.classList.add("is-visible");
  });
});
