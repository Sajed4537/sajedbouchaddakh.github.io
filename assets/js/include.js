// Charge les partials puis déclenche un événement "partials:loaded"
document.addEventListener('DOMContentLoaded', async () => {
  const zones = [...document.querySelectorAll('[data-include]')];
  await Promise.all(zones.map(async (el) => {
    const url = el.getAttribute('data-include');
    try {
      const res = await fetch(url, { cache: 'no-cache' });
      el.innerHTML = await res.text();
    } catch (e) {
      console.error('Include error:', url, e);
      el.innerHTML = '<div class="text-red-400">Erreur de chargement.</div>';
    }
  }));
  document.dispatchEvent(new Event('partials:loaded'));
});
