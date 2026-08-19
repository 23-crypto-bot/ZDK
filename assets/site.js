document.addEventListener("click", async (event) => {
  const button = event.target.closest("[data-copy-target]");
  if (!button) return;

  const target = document.getElementById(button.dataset.copyTarget);
  const status = document.querySelector(".copy-status");
  if (!target || !status) return;

  try {
    await navigator.clipboard.writeText(target.textContent);
    status.textContent = "Payload copied.";
  } catch {
    status.textContent = "Copy failed. Select the payload manually.";
  }
});
