console.log('[init] script.js chargé');

/* ------------------------------
   Helpers
--------------------------------*/
const $  = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const on = (el, ev, cb) => el && el.addEventListener(ev, cb);

/* ------------------------------
   Scroll lock (modales)
--------------------------------*/
const BodyScroll = (() => {
  let lockCount = 0, prevOverflow = '';
  return {
    lock()   { if (!lockCount) prevOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; lockCount++; },
    unlock() { lockCount = Math.max(0, lockCount - 1); if (!lockCount) document.body.style.overflow = prevOverflow; }
  };
})();

/* ------------------------------
   Modales
--------------------------------*/
const Modal = {
  open(modal)  { if (!modal) return; modal.classList.remove('hidden'); BodyScroll.lock(); },
  close(modal) { if (!modal) return; modal.classList.add('hidden');   BodyScroll.unlock(); },
  initAll() {
    $$('[data-modal-open]').forEach(btn => {
      on(btn, 'click', () => {
        const id = btn.getAttribute('data-modal-open');
        Modal.open(document.getElementById(id));
      });
    });
    $$('[data-modal] [data-modal-close]').forEach(btn => {
      on(btn, 'click', () => Modal.close(btn.closest('[data-modal]')));
    });
    $$('[data-modal]').forEach(modal => {
      on(modal, 'click', (e) => { if (e.target === modal) Modal.close(modal); });
    });
    on(document, 'keydown', (e) => {
      if (e.key !== 'Escape') return;
      $$('[data-modal]:not(.hidden)').forEach(Modal.close);
    });
  }
};

/* ------------------------------
   Slider réutilisable
--------------------------------*/
class Slider {
  constructor(root) {
    this.root  = root;
    this.track = $('.slider-track', root);
    this.prev  = $('.slider-prev', root);
    this.next  = $('.slider-next', root);
    this.dots  = $('.slider-dots', root);
    this.title = $('.slider-title', root);

    this.slides = $$('.slider-track > *', root);
    this.count  = this.slides.length;
    this.index  = 0;

    this.labels = (() => {
      try {
        let raw = root.getAttribute('data-slider-labels') || '[]';
        raw = raw.replace(/&quot;/g, '"').replace(/'/g, '"');
        return JSON.parse(raw);
      } catch { return []; }
    })();

    if (!this.track || !this.count) return;

    this.makeDots();
    this.bind();
    this.render();
  }

  makeDots() {
    if (!this.dots) { this.dotNodes = []; return; }
    if (this.count <= 1) { this.dots.innerHTML = ''; this.dots.style.display = 'none'; this.dotNodes = []; return; }
    this.dots.style.display = '';
    this.dots.innerHTML = '';
    for (let i = 0; i < this.count; i++) {
      const b = document.createElement('button');
      b.className = 'h-2 w-2 rounded-full bg-white/30 hover:bg-white/60';
      b.dataset.i = String(i);
      this.dots.appendChild(b);
    }
    this.dotNodes = $$('.slider-dots > button', this.root);
  }

  set(i) { this.index = (i + this.count) % this.count; this.render(); }
  nextSlide = () => this.set(this.index + 1);
  prevSlide = () => this.set(this.index - 1);

  render() {
    this.track.style.transform = `translateX(-${this.index * 100}%)`;
    if (this.dotNodes?.length) {
      this.dotNodes.forEach((d, i) => {
        d.className = 'h-2 w-2 rounded-full ' + (i === this.index ? 'bg-white' : 'bg-white/30 hover:bg-white/60');
      });
    }
    if (this.title) {
      const label = this.labels[this.index] || this.title.getAttribute('data-default') || `Slide ${this.index + 1}`;
      this.title.textContent = label;
    }
  }

  bind() {
    this.prev?.addEventListener('click', this.prevSlide);
    this.next?.addEventListener('click', this.nextSlide);

    this.dots?.addEventListener('click', (e) => {
      const i = e.target?.dataset?.i;
      if (i != null) this.set(Number(i));
    });

    // Swipe mobile
    let startX = 0, dx = 0;
    this.track.style.touchAction = 'pan-y';
    this.track.addEventListener('touchstart', (e) => { startX = e.touches[0].clientX; dx = 0; }, { passive: true });
    this.track.addEventListener('touchmove',  (e) => { dx = e.touches[0].clientX - startX; }, { passive: true });
    this.track.addEventListener('touchend',   () => {
      if (Math.abs(dx) > 50) { dx < 0 ? this.nextSlide() : this.prevSlide(); }
      dx = 0;
    }, { passive: true });

    // Clavier si modal ouverte
    on(document, 'keydown', (e) => {
      const modal = this.root.closest('[data-modal]');
      const modalOpen = !modal || !modal.classList.contains('hidden');
      if (!modalOpen) return;
      if (e.key === 'ArrowLeft')  this.prevSlide();
      if (e.key === 'ArrowRight') this.nextSlide();
    });
  }

  static initAll() { $$('[data-slider]').forEach(root => new Slider(root)); }
}

/* ------------------------------
   Animation "fade-up"
--------------------------------*/
function initFadeUp() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduce) {
    document.querySelectorAll('.animate-fade-up').forEach(el => el.classList.add('is-inview'));
    return;
  }

  // Stagger auto
  document.querySelectorAll('[data-stagger]').forEach(container => {
    const step = parseInt(container.getAttribute('data-stagger'), 10) || 80;
    container.querySelectorAll('.animate-fade-up').forEach((el, i) => {
      if (!el.hasAttribute('data-anim-delay')) el.style.transitionDelay = `${i * step}ms`;
    });
  });

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = el.getAttribute('data-anim-delay');
      if (delay) el.style.transitionDelay = `${parseInt(delay, 10)}ms`;
      el.classList.add('is-inview');
      io.unobserve(el);
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -5% 0px' });

  document.querySelectorAll('.animate-fade-up').forEach(el => io.observe(el));
}

/* ------------------------------
   Boot : attendre les partials
--------------------------------*/
function boot() {
  Modal.initAll();
  Slider.initAll();
  initFadeUp();
}

// 1) Si les partials sont déjà chargés
document.addEventListener('partials:loaded', boot);

// 2) Sécurité : si jamais il n’y a pas de partials, on tente quand même
document.addEventListener('DOMContentLoaded', () => {
  // Si include.js n’a rien dispatch, on boot quand même au bout d’un micro délai
  setTimeout(() => {
    if (!window.__partialsLoaded) boot();
  }, 50);
});

// Marqueur pour éviter double init (optionnel)
document.addEventListener('partials:loaded', () => { window.__partialsLoaded = true; });
