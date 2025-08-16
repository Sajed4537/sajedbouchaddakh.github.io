/*! Portfolio Sajed – scripts génériques
 *  assets/js/script.js
 *  - Gestion modales (ouvrir/fermer via data-attributes)
 *  - Sliders réutilisables (overlay ou inline)
 */

/* ---------- Utils ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const on = (el, ev, cb) => el && el.addEventListener(ev, cb);

/* ---------- Scroll lock pour modales ---------- */
const BodyScroll = (() => {
  let lockCount = 0, prevOverflow = "";
  return {
    lock() {
      if (lockCount === 0) prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      lockCount++;
    },
    unlock() {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) document.body.style.overflow = prevOverflow;
    }
  };
})();

/* ---------- Modales génériques ---------- */
/* HTML attendu :
   - Bouton pour ouvrir :  data-modal-open="ID_DE_LA_MODALE"
   - Bouton pour fermer : data-modal-close (à l'intérieur de la modale)
   - Conteneur modale :   id="ID_DE_LA_MODALE" + data-modal
   - Fermeture au clic sur le backdrop (clic sur le conteneur lui‑même)
*/
const Modal = {
  open(modal) {
    if (!modal) return;
    modal.classList.remove("hidden");
    BodyScroll.lock();
  },
  close(modal) {
    if (!modal) return;
    modal.classList.add("hidden");
    BodyScroll.unlock();
  },
  initAll() {
    // Ouvrir
    $$("[data-modal-open]").forEach(btn => {
      on(btn, "click", () => {
        const id = btn.getAttribute("data-modal-open");
        const modal = document.getElementById(id);
        Modal.open(modal);
      });
    });
    // Fermer (bouton X)
    $$("[data-modal] [data-modal-close]").forEach(btn => {
      on(btn, "click", () => Modal.close(btn.closest("[data-modal]")));
    });
    // Fermer (clic backdrop)
    $$("[data-modal]").forEach(modal => {
      on(modal, "click", (e) => { if (e.target === modal) Modal.close(modal); });
    });
    // Fermer (Esc)
    on(document, "keydown", (e) => {
      if (e.key !== "Escape") return;
      $$("[data-modal]:not(.hidden)").forEach(Modal.close);
    });
  }
};

/* ---------- Slider réutilisable ---------- */
/* HTML attendu dans un conteneur avec data-slider :
   <div data-slider>
     <div class="slider-track"> ... <article>slide</article> ... </div>
     <button class="slider-prev">←</button>
     <button class="slider-next">→</button>
     <div class="slider-dots"></div>
     <h4 class="slider-title"></h4>  (optionnel)
   </div>
*/
/* ---------- Slider réutilisable (flèches optionnelles) ---------- */
class Slider {
  constructor(root) {
    this.root  = root;
    this.track = $(".slider-track", root);
    this.prev  = $(".slider-prev", root);   // peut être null
    this.next  = $(".slider-next", root);   // peut être null
    this.dots  = $(".slider-dots", root);   // peut être null
    this.title = $(".slider-title", root);

    this.slides = $$(".slider-track > *", root);
    this.count  = this.slides.length;
    this.index  = 0;

    // Labels tolérants aux &quot; et quotes simples
    this.labels = (() => {
      try {
        let raw = root.getAttribute("data-slider-labels") || "[]";
        raw = raw.replace(/&quot;/g, '"').replace(/'/g, '"');
        return JSON.parse(raw);
      } catch { return []; }
    })();

    // Conditions minimales : une track et au moins 1 slide
    if (!this.track || this.count === 0) return;

    // Dots optionnels
    this.makeDots();
    this.bind();
    this.render();
  }

  makeDots() {
    if (!this.dots) { this.dotNodes = []; return; }
    if (this.count <= 1) { this.dots.innerHTML = ""; this.dots.style.display = "none"; this.dotNodes = []; return; }

    this.dots.style.display = "";
    this.dots.innerHTML = "";
    for (let i = 0; i < this.count; i++) {
      const b = document.createElement("button");
      b.className = "h-2 w-2 rounded-full bg-white/30 hover:bg-white/60";
      b.dataset.i = String(i);
      this.dots.appendChild(b);
    }
    this.dotNodes = $$(".slider-dots > button", this.root);
  }

  set(i) { this.index = (i + this.count) % this.count; this.render(); }
  nextSlide = () => this.set(this.index + 1);
  prevSlide = () => this.set(this.index - 1);

  render() {
    this.track.style.transform = `translateX(-${this.index * 100}%)`;

    // Dots (si présents)
    if (this.dotNodes && this.dotNodes.length) {
      this.dotNodes.forEach((d, i) => d.className =
        "h-2 w-2 rounded-full " + (i === this.index ? "bg-white" : "bg-white/30 hover:bg-white/60"));
    }

    // Titre (si présent)
    if (this.title) {
      const label = this.labels[this.index] || this.title.getAttribute("data-default") || `Slide ${this.index + 1}`;
      this.title.textContent = label;
    }
  }

  bind() {
    // Flèches (si présentes)
    this.prev?.addEventListener("click", this.prevSlide);
    this.next?.addEventListener("click", this.nextSlide);

    // Dots (si présents)
    this.dots?.addEventListener("click", (e) => {
      const i = e.target?.dataset?.i;
      if (i != null) this.set(Number(i));
    });

    // Clavier actif si modal ouverte (ou inline)
    on(document, "keydown", (e) => {
      const modal = this.root.closest("[data-modal]");
      const modalOpen = !modal || !modal.classList.contains("hidden");
      if (!modalOpen) return;
      if (e.key === "ArrowLeft")  this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });
  }

  static initAll() { $$("[data-slider]").forEach(root => new Slider(root)); }
}


/* ---------- Boot ---------- */
document.addEventListener("DOMContentLoaded", () => {
  Modal.initAll();
  Slider.initAll();
  // Expose pour debug si besoin :
  window.App = { Modal, Slider };
});
