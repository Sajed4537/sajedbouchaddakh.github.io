// assets/js/include.js
async function loadPartials() {
  const slots = Array.from(document.querySelectorAll("[data-include]"));
  await Promise.all(slots.map(async (slot) => {
    const url = slot.getAttribute("data-include");
    try {
      const res = await fetch(url, { cache: "no-cache" });
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      slot.innerHTML = await res.text();
    } catch (err) {
      console.error("Include error:", url, err);
      slot.innerHTML = `<div class="text-red-400 text-sm p-4">Erreur de chargement: ${url}</div>`;
    }
  }));

  // Ré-initialise modales et sliders présents dans les partials
  if (window.App?.Modal?.initAll) window.App.Modal.initAll();
  if (window.App?.Slider?.initAll) window.App.Slider.initAll();
}
document.addEventListener("DOMContentLoaded", loadPartials);
