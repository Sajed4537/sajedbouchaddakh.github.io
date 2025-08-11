// JS — panneaux stables + cascade sur TOUS les éléments
(function () {
  const overlay = document.querySelector('.overlay');
  const header  = document.querySelector('header');
  const main    = document.querySelector('main');
  const panels  = Array.from(document.querySelectorAll('article.panel'));

  // Polyfill léger pour CSS.escape si absent
  const escapeCss = (window.CSS && CSS.escape) ? CSS.escape : (s) => String(s).replace(/[^a-zA-Z0-9_-]/g, '\\$&');

  // Récupère UNIQUEMENT un <article class="panel" id="...">
  const getPanel = (id) => document.querySelector(`article.panel#${escapeCss(id)}`);

  // ----- Anim d'accueil (présentation)
  function showHomeAnim() {
    const pres = header?.querySelector('.presentation');
    if (!pres) return;
    pres.classList.remove('visible');
    requestAnimationFrame(() => requestAnimationFrame(() => pres.classList.add('visible')));
  }

  // ----- Remet TOUT en état "menu"
  function resetToHome() {
    document.body.classList.remove('menu-open');
    overlay?.setAttribute('aria-hidden', 'true');
    panels.forEach(p => p.classList.remove('active'));
    if (header) header.style.display = '';
    if (main)   main.style.display   = '';
    // nettoie un hash invalide éventuel
    if (location.hash && !getPanel(location.hash.slice(1))) {
      history.replaceState(null, '', location.pathname + location.search);
    }
    showHomeAnim();
  }

  // ===== Cascade paramètres (ajuste la vitesse ici)
  const START_DELAY = 0.10;  // s
  const STEP_DELAY  = 0.08;  // s entre chaque élément

  // ----- Apparition en cascade sur TOUS les éléments (sauf bouton fermer)
  function revealPanel(panel) {
    const box = panel.querySelector('.section-bloc');
    if (!box) return;

    // Séquence = tous les descendants (ordre du DOM), hors .close-btn / scripts / styles / br
    const seq = Array.from(box.querySelectorAll('*')).filter(el =>
      el !== box &&
      !el.classList.contains('close-btn') &&
      !el.closest('.close-btn') &&
      !el.matches('br,script,style')
    );

    // Reset visuel (laisse la croix intacte—elle a ses règles CSS)
    box.classList.remove('visible');
    seq.forEach(el => {
      el.style.transition = 'opacity .7s ease, transform .7s ease';
      el.style.transitionDelay = '0s';
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
    });

    // Montre le conteneur puis déroule la cascade
    requestAnimationFrame(() => {
      box.classList.add('visible');

      let t = START_DELAY;
      seq.forEach(el => {
        el.style.transitionDelay = `${t}s`;
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
        t += STEP_DELAY;
      });
    });
  }

  // ----- Nettoyage du panneau (retour à l'état initial)
  function clearPanel(panel) {
    const box = panel.querySelector('.section-bloc');
    if (!box) return;

    const seq = Array.from(box.querySelectorAll('*')).filter(el =>
      el !== box &&
      !el.classList.contains('close-btn') &&
      !el.closest('.close-btn') &&
      !el.matches('br,script,style')
    );

    box.classList.remove('visible');
    seq.forEach(el => {
      el.style.transition = '';
      el.style.transitionDelay = '';
      el.style.opacity = '';
      el.style.transform = '';
    });
  }

  // ----- Ouvrir / Fermer
  function openPanel(id, byHash = false) {
    const panel = getPanel(id);
    if (!panel) return;

    document.body.classList.add('menu-open');
    overlay?.setAttribute('aria-hidden', 'false');
    if (header) header.style.display = 'none';
    if (main)   main.style.display   = 'none';

    panels.forEach(p => { if (p !== panel) { p.classList.remove('active'); clearPanel(p); } });
    panel.classList.add('active');

    // croix
    const btn = panel.querySelector('.close-btn');
    if (btn) btn.onclick = (e) => { e.preventDefault(); closePanel(); };

    setTimeout(() => panel.focus({ preventScroll: false }), 30);
    revealPanel(panel);

    if (!byHash) history.replaceState(null, '', '#' + id);
  }

  function closePanel() {
    document.body.classList.remove('menu-open');
    overlay?.setAttribute('aria-hidden', 'true');
    panels.forEach(p => { p.classList.remove('active'); clearPanel(p); });
    if (location.hash) history.replaceState(null, '', location.pathname + location.search);
    if (header) header.style.display = '';
    if (main)   main.style.display   = '';
    showHomeAnim();
  }

  // ----- Écoutes
  // Clics sur le menu d’accueil
  header?.addEventListener('click', (e) => {
    const a = e.target.closest('a[href^="#"]');
    if (!a) return;
    const id = a.getAttribute('href').slice(1);
    if (getPanel(id)) { e.preventDefault(); openPanel(id); }
  });

  // Échap pour fermer
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) closePanel();
  });

  // Back/forward + liens directs
  window.addEventListener('hashchange', () => {
    const id = location.hash.slice(1);
    if (getPanel(id)) openPanel(id, true);
    else closePanel();
  });

  // ----- Démarrage propre
  document.addEventListener('DOMContentLoaded', () => {
    const id = location.hash.slice(1);
    if (getPanel(id)) openPanel(id, true);
    else resetToHome();
  });

  // Fallback après chargement complet
  window.addEventListener('load', () => {
    if (!document.body.classList.contains('menu-open') &&
        !panels.some(p => p.classList.contains('active'))) {
      resetToHome();
    }
  });
})();
