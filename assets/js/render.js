'use strict';

window.Render = (() => {

  /* ── CSS constants ────────────────────────────────── */
  const CARD       = 'rounded-2xl ring-1 ring-white/10 bg-white/5 p-5 md:p-6 flex flex-col justify-between animate-fade-up';
  const BTN_OUTLINE = 'rounded-xl px-3 py-2 text-sm ring-1 ring-white/20 hover:bg-white/10 transition';
  const BTN_BLUE    = 'rounded-xl px-3 py-2 text-sm bg-blue-600 hover:bg-blue-500 transition';
  const MODAL_CARD  = 'rounded-3xl ring-1 ring-white/10 shadow-2xl bg-[radial-gradient(1200px_800px_at_80%_0%,#2a67ff14_0%,#0b1b2e_45%,#03070c_100%)]';

  /* ── Project card ─────────────────────────────────── */
  function projectCard(p) {
    const cols = p.buttons.length === 1 ? 'grid-cols-1' : 'grid-cols-2';
    const btns = p.buttons.map(b => {
      const cls = (b.style === 'blue' ? BTN_BLUE : BTN_OUTLINE) + (b.full ? ' col-span-2' : '');
      if (b.action === 'href') {
        return `<a href="${b.href}" target="_blank" class="text-center ${cls}">${b.label}</a>`;
      }
      return `<button data-dynamic-open data-content-type="${b.action}" data-content-key="${b.key}" class="${cls}">${b.label}</button>`;
    }).join('');

    return `<article class="${CARD}">
      <header class="space-y-1.5">
        <h4 class="text-lg md:text-xl font-bold">${p.title}</h4>
        <p class="text-white/70 text-sm">Nature : <span class="text-white">${p.nature}</span></p>
        <p class="text-white/70 text-sm">Statut : <span class="text-white">${p.status}</span></p>
        <p class="text-white/70 text-sm">Années : <span class="text-white">${p.years}</span></p>
      </header>
      <div class="mt-4 grid ${cols} gap-2">${btns}</div>
    </article>`;
  }

  /* ── À propos tile ────────────────────────────────── */
  function aproposTile(t) {
    return `<article class="${CARD.replace('flex flex-col justify-between', '')} rounded-2xl bg-white/5 ring-1 ring-white/10 p-6 animate-fade-up">
      <h3 class="text-xl font-semibold">${t.title}</h3>
      <p class="mt-2 text-white/70 text-sm">${t.desc}</p>
      <button data-dynamic-open data-content-type="slider" data-content-key="${t.key}"
              class="mt-4 inline-flex items-center justify-center rounded-xl px-4 py-2 bg-blue-600 hover:bg-blue-500 text-sm font-medium transition">
        Plus de détails
      </button>
    </article>`;
  }

  /* ── Detail modal content ─────────────────────────── */
  function detailContent(data) {
    if (!data) return '<p class="text-red-400 p-8">Contenu introuvable.</p>';
    const objectiveHtml = data.objective
      ? `<p class="mt-2 text-white/80 text-sm md:text-base leading-relaxed"><span class="font-semibold">Objectif&nbsp;:</span> ${data.objective}</p>`
      : '';
    const sectionsHtml = data.sections.map(s => {
      const extra = s.fullWidth ? ' md:col-span-2' : '';
      return `<section class="${extra}">
        <h5 class="font-semibold text-white mb-2">${s.title}</h5>
        <ul class="list-disc list-inside space-y-1.5 text-sm text-white/80 leading-relaxed">
          ${s.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </section>`;
    }).join('');
    const noteHtml = data.note
      ? `<p class="mt-4 text-sm text-white/80 leading-relaxed">${data.note}</p>`
      : '';

    return `<div class="${MODAL_CARD} max-h-[85vh] overflow-y-auto ios-scroll [scrollbar-gutter:stable]">
      <div class="px-5 md:px-10 pt-8 pb-2">
        <h4 class="text-3xl font-extrabold tracking-tight">${data.title}</h4>
        ${objectiveHtml}
      </div>
      <div class="px-5 md:px-10 pb-8 md:pb-10">
        <div class="grid md:grid-cols-2 gap-8">${sectionsHtml}</div>
        ${noteHtml}
      </div>
    </div>`;
  }

  /* ── Logo grid ────────────────────────────────────── */
  function logoItem(l) {
    return l.bg
      ? `<div class="bg-white p-4 md:p-5 rounded-xl flex items-center justify-center">
           <img src="${l.src}" alt="${l.alt}" class="w-16 h-16 md:w-20 md:h-20 object-contain">
         </div>`
      : `<img src="${l.src}" alt="${l.alt}" class="w-16 h-16 md:w-20 md:h-20 object-contain">`;
  }

  function logoGrid(logos) {
    const n = logos.length;
    let inner;

    if (n === 1) {
      inner = `<div class="flex items-center justify-center">${logoItem(logos[0])}</div>`;
    } else if (n === 2) {
      inner = `<div class="grid grid-cols-2 gap-8 md:gap-14 place-items-center">
        ${logos.map(logoItem).join('')}
      </div>`;
    } else if (n === 3) {
      inner = `<div class="grid grid-cols-3 gap-4 md:gap-8 place-items-center">
        ${logos.map(logoItem).join('')}
      </div>`;
    } else if (n === 4) {
      inner = `<div class="grid grid-cols-2 gap-6 md:gap-10 place-items-center">
        ${logos.map(logoItem).join('')}
      </div>`;
    } else if (n === 5) {
      inner = `<div class="grid grid-cols-3 gap-4 md:gap-8 place-items-center">
        ${logos.slice(0, 3).map(logoItem).join('')}
      </div>
      <div class="grid grid-cols-2 gap-4 md:gap-8 place-items-center mt-4 md:mt-6 px-6 md:px-16">
        ${logos.slice(3).map(logoItem).join('')}
      </div>`;
    } else {
      inner = `<div class="grid grid-cols-3 gap-4 md:gap-8 place-items-center">
        ${logos.map(logoItem).join('')}
      </div>`;
    }

    return `<div class="aspect-[16/10] rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-blue-900/40 to-black/20 flex flex-col items-center justify-center p-4 md:p-8">
      ${inner}
    </div>`;
  }

  /* ── Individual slide ─────────────────────────────── */
  function slideHtml(s) {
    if (s.type === 'wip') {
      return `<article class="w-full shrink-0 snap-start p-6 md:p-10">
        <div class="flex items-center justify-center min-h-[22rem]">
          <div class="max-w-xl text-center rounded-2xl ring-1 ring-white/15 bg-white/[.06] p-6">
            <div class="mx-auto w-12 h-12 rounded-full ring-1 ring-white/20 bg-white/[.08] flex items-center justify-center animate-pulse">⌛</div>
            <p class="mt-3 font-semibold">Work in progress</p>
            <p class="text-white/70 text-sm">Contenu détaillé bientôt disponible.</p>
          </div>
        </div>
      </article>`;
    }

    if (s.type === 'module') {
      return `<article class="w-full shrink-0 snap-start p-6 md:p-10">
        <div class="grid md:grid-cols-2 gap-8 items-center">
          <ul class="text-white/85 text-base md:text-lg list-disc list-inside space-y-1.5">
            ${s.objectives.map(o => `<li>${o}</li>`).join('')}
          </ul>
          <div class="text-white/85 text-sm md:text-base">
            <h6 class="font-semibold mb-2">Exercices</h6>
            <ul class="list-disc list-inside space-y-1.5">
              ${s.exercises.map(e => `<li><a class="underline hover:no-underline" target="_blank" href="${e.url}">${e.label}</a></li>`).join('')}
            </ul>
            <h6 class="font-semibold mt-4 mb-2">Projet</h6>
            <p><a class="underline hover:no-underline" target="_blank" href="${s.project.url}">${s.project.label}</a>
               <span class="text-white/60"> ${s.project.desc}</span></p>
          </div>
        </div>
      </article>`;
    }

    if (s.video) {
      const media = s.videoMobile
        ? `<div class="w-full max-w-full md:max-w-[450px] mx-auto">
             <video controls playsinline style="touch-action:auto" class="block w-full h-auto max-h-[60vh] md:max-h-[500px] rounded-2xl ring-1 ring-white/10 shadow-inner object-contain bg-black">
               <source src="${s.video}" type="video/mp4">
             </video>
           </div>`
        : `<video controls playsinline style="touch-action:auto" class="w-full rounded-2xl ring-1 ring-white/10 shadow-inner">
             <source src="${s.video}" type="video/mp4">
           </video>`;
      return `<article class="w-full shrink-0 snap-start p-6 md:p-10">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          ${media}
          <div class="text-white/85 leading-relaxed text-base md:text-lg">
            <h5 class="text-xl font-bold mb-2">${s.title}</h5>
            <p>${s.desc}</p>
          </div>
        </div>
      </article>`;
    }

    if (s.image && !s.logos) {
      const isPortrait = s.imageAlt && s.imageAlt.includes('MVP');
      const imgCls = isPortrait
        ? 'block w-full aspect-[9/16] md:aspect-[10/16] max-h-[420px] rounded-2xl ring-1 ring-white/10 shadow-inner object-contain bg-black/20'
        : 'w-full h-full object-cover';
      const wrapCls = isPortrait
        ? 'w-full max-w-full md:max-w-[640px] mx-auto'
        : 'aspect-[16/10] rounded-2xl ring-1 ring-white/10 overflow-hidden';
      return `<article class="w-full shrink-0 snap-start p-6 md:p-10">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <div class="${wrapCls}">
            <img src="${s.image}" alt="${s.imageAlt}" class="${imgCls}">
          </div>
          <div class="text-white/85 text-lg">
            <h5 class="text-xl font-bold mb-2">${s.title}</h5>
            <p>${s.items ? '' : s.desc}</p>
            ${s.items ? `<ul class="list-disc list-inside space-y-2 mt-2">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
          </div>
        </div>
      </article>`;
    }

    if (s.logos) {
      const introHtml = s.intro ? `<p class="mb-3">${s.intro}</p>` : '';
      return `<article class="w-full shrink-0 snap-start p-5 md:p-10">
        <div class="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          ${logoGrid(s.logos)}
          <div class="text-white/85 text-base md:text-lg leading-relaxed">
            <h5 class="text-xl font-bold mb-3">${s.title}</h5>
            ${introHtml}
            <ul class="list-disc list-inside space-y-2">${s.items.map(i => `<li>${i}</li>`).join('')}</ul>
          </div>
        </div>
      </article>`;
    }

    if (s.images) {
      const imgs = s.images.map(img =>
        `<div class="overflow-hidden rounded-lg"><img src="${img.src}" alt="${img.alt}" class="w-full h-full object-cover object-[20%]"></div>`
      ).join('');
      return `<article class="w-full shrink-0 snap-start p-6 md:p-10">
        <div class="grid md:grid-cols-2 gap-8 items-start">
          <div class="aspect-[16/10] rounded-2xl ring-1 ring-white/10 overflow-hidden">
            <div class="grid grid-cols-2 gap-2 w-full h-full">${imgs}</div>
          </div>
          <div class="text-white/85 text-lg">
            <h5 class="text-xl font-bold mb-2">${s.title}</h5>
            <p>${s.desc}</p>
          </div>
        </div>
      </article>`;
    }

    // Generic image + desc (hobbies)
    return `<article class="w-full shrink-0 snap-start p-6 md:p-10">
      <div class="grid md:grid-cols-2 gap-8 items-start">
        <div class="aspect-[16/10] rounded-2xl ring-1 ring-white/10 overflow-hidden">
          <img src="${s.image}" alt="${s.imageAlt}" class="w-full h-full object-cover">
        </div>
        <div class="text-white/85 text-lg">
          <h5 class="text-xl font-bold mb-2">${s.title}</h5>
          <p>${s.desc}</p>
        </div>
      </div>
    </article>`;
  }

  /* ── Slider modal content ─────────────────────────── */
  function sliderContent(key) {
    const data = DATA.sliders[key] || DATA.skillSliders[key];
    if (!data) return `<p class="text-red-400 p-8">Slider introuvable : ${key}</p>`;

    const labelsJson = JSON.stringify(data.labels).replace(/'/g, '&#39;');
    const defaultTitle = data.title || data.labels[0] || '';
    const slidesHtml = data.slides.map(slideHtml).join('');

    return `<div class="${MODAL_CARD} max-h-[calc(100dvh-9rem)] md:max-h-none overflow-y-auto ios-scroll">
      <div data-slider data-slider-labels='${labelsJson}' class="relative">
        <div class="px-6 md:px-10 pt-8 pb-4">
          <h4 class="slider-title text-3xl font-extrabold tracking-tight" data-default="${defaultTitle}"></h4>
        </div>
        <div class="px-4 md:px-8 pb-10">
          <div class="overflow-hidden rounded-2xl ring-1 ring-white/10 bg-white/5">
            <div class="slider-track flex transition-transform duration-400 ease-out" style="transform:translateX(0)">
              ${slidesHtml}
            </div>
          </div>
        </div>
        <div class="slider-dots pb-6 flex items-center justify-center gap-2"></div>
        <button class="slider-prev hidden md:flex absolute -left-20 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/30 transition items-center justify-center">←</button>
        <button class="slider-next hidden md:flex absolute -right-20 top-1/2 -translate-y-1/2 z-50 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 ring-1 ring-white/30 transition items-center justify-center">→</button>
      </div>
    </div>`;
  }

  /* ── Modal shell wiring ───────────────────────────── */
  function wireModalShell() {
    const shell = document.getElementById('modal-shell');
    const body  = document.getElementById('modal-body');
    if (!shell || !body) return;

    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-dynamic-open]');
      if (!btn) return;

      const key  = btn.dataset.contentKey;
      const type = btn.dataset.contentType;

      if (type === 'detail') {
        body.innerHTML = detailContent(DATA.details[key]);
      } else if (type === 'slider') {
        body.innerHTML = sliderContent(key);
        const sliderRoot = body.querySelector('[data-slider]');
        if (sliderRoot && window.Slider) new window.Slider(sliderRoot);
      }

      shell.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    });
  }

  /* ── Public init ──────────────────────────────────── */
  function init() {
    const techGrid   = document.getElementById('grid-tech');
    const btpGrid    = document.getElementById('grid-btp');
    const aproposGrid = document.getElementById('grid-apropos');

    if (techGrid)    techGrid.innerHTML    = DATA.projects.tech.map(projectCard).join('');
    if (btpGrid)     btpGrid.innerHTML     = DATA.projects.btp.map(projectCard).join('');
    if (aproposGrid) aproposGrid.innerHTML = DATA.apropos.map(aproposTile).join('');

    wireModalShell();
  }

  return { init };
})();
