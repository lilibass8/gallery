/**
 * The Glow Gallery — corridor walk, entrance, routing
 */
(function () {
  'use strict';

  const PAGES = ['artists', 'exhibitions', 'collection', 'submit'];

  function I18n() {
    return window.GlowGalleryI18n;
  }
  const ENTRANCE_DURATION = 2800;
  const MAX_DEPTH = 2000;
  const SCROLL_RATIO = 1.15;
  const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const entrance = document.getElementById('entrance');
  const progressBar = document.querySelector('.entrance-progress-bar');
  const progressEl = document.querySelector('.entrance-progress');
  const galleryRoom = document.getElementById('gallery-room');
  const pageContainer = document.getElementById('page-container');
  const homeBtn = document.getElementById('home-btn');
  const frames = document.querySelectorAll('.corridor-frame--nav[data-page]');
  const yearEl = document.getElementById('year');

  const track = document.getElementById('corridor-scroll-track');
  const world = document.getElementById('corridor-world');
  const scene = document.getElementById('corridor-scene');
  const viewport = document.getElementById('corridor-viewport');
  const env = document.getElementById('corridor-env');
  const ceilingLights = document.getElementById('ceiling-lights');
  const walkProgressBar = document.getElementById('walk-progress-bar');
  const walkProgressEl = document.querySelector('.walk-progress');
  const resetBtn = document.getElementById('corridor-reset');
  const floor = document.querySelector('.corridor-floor');
  const wallLeft = document.querySelector('.corridor-wall--left');
  const wallRight = document.querySelector('.corridor-wall--right');

  let currentPage = null;
  let isTransitioning = false;
  let scrollTicking = false;
  let corridorReady = false;

  /* ——— Boot ——— */
  function init() {
    if (window.GlowGalleryI18n) GlowGalleryI18n.init();

    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    window.addEventListener('glow:langchange', () => {
      if (currentPage) I18n()?.updateDocumentTitle(currentPage);
      else I18n()?.updateDocumentTitle();
    });

    setupNavigation();
    setupContactForm();
    setupEntranceSkip();
    runEntrance();
    handleInitialRoute();
    window.addEventListener('popstate', onPopState);
  }

  /* ——— Entrance ——— */
  function setupEntranceSkip() {
    entrance?.addEventListener('click', finishEntrance);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ' || e.key === 'Escape') {
        if (!entrance?.classList.contains('is-complete')) finishEntrance();
      }
    });
  }

  function runEntrance() {
    document.body.classList.add('is-entering');

    if (REDUCED_MOTION) {
      finishEntrance();
      return;
    }

    const start = performance.now();

    function tick(now) {
      const elapsed = now - start;
      const pct = Math.min(100, (elapsed / ENTRANCE_DURATION) * 100);
      if (progressBar) progressBar.style.width = `${pct}%`;
      if (progressEl) progressEl.setAttribute('aria-valuenow', String(Math.round(pct)));

      if (elapsed < ENTRANCE_DURATION) {
        requestAnimationFrame(tick);
      } else {
        finishEntrance();
      }
    }

    requestAnimationFrame(tick);
  }

  function finishEntrance() {
    if (entrance?.classList.contains('is-complete')) return;

    entrance?.classList.add('is-complete');
    document.body.classList.remove('is-entering');
    document.body.classList.add('entrance-done');
    document.body.style.overflow = '';
    entrance?.setAttribute('aria-hidden', 'true');
    if (progressBar) progressBar.style.width = '100%';
    initCorridor();
  }

  /* ——— Corridor scroll walk ——— */
  function initCorridor() {
    if (corridorReady) return;
    corridorReady = true;

    if (!track || !world) return;

    if (REDUCED_MOTION) {
      track.style.height = 'auto';
      document.querySelector('.corridor-frames')?.classList.add('is-static-layout');
      document.querySelectorAll('.corridor-frame--nav').forEach((f) => f.classList.add('is-static'));
      return;
    }

    buildCeilingLights();
    setScrollTrackHeight();
    updateWalk();

    window.addEventListener('scroll', onCorridorScroll, { passive: true });
    window.addEventListener('resize', onCorridorResize, { passive: true });

    track.addEventListener('wheel', onCorridorWheel, { passive: false });

    resetBtn?.addEventListener('click', () => {
      const top = getTrackTop();
      window.scrollTo({ top, behavior: 'smooth' });
    });

    setupMouseParallax();
  }

  function getTrackTop() {
    const rect = track.getBoundingClientRect();
    return window.scrollY + rect.top;
  }

  function getWalkProgress() {
    const trackTop = getTrackTop();
    const maxScroll = Math.max(1, track.offsetHeight - window.innerHeight);
    const scrolled = Math.max(0, window.scrollY - trackTop);
    return Math.min(1, scrolled / maxScroll);
  }

  function buildCeilingLights() {
    if (!ceilingLights) return;
    ceilingLights.innerHTML = '';
    for (let i = 0; i < 14; i++) {
      const el = document.createElement('span');
      el.className = 'ceiling-light';
      ceilingLights.appendChild(el);
    }
  }

  function setScrollTrackHeight() {
    const scrollDistance = MAX_DEPTH * SCROLL_RATIO;
    track.style.height = `calc(100dvh + ${scrollDistance}px)`;
    document.documentElement.style.setProperty('--corridor-max-depth', String(MAX_DEPTH));
  }

  function onCorridorScroll() {
    if (!scrollTicking) {
      scrollTicking = true;
      requestAnimationFrame(() => {
        updateWalk();
        scrollTicking = false;
      });
    }
  }

  function onCorridorResize() {
    setScrollTrackHeight();
    updateWalk();
  }

  function onCorridorWheel(e) {
    if (currentPage || document.body.classList.contains('is-entering')) return;
    const rect = track.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
  }

  function updateWalk() {
    if (!world || currentPage) return;

    const progress = getWalkProgress();
    const walkZ = progress * MAX_DEPTH;

    world.style.transform = `translate3d(-50%, -50%, ${walkZ}px)`;

    if (env) env.style.transform = `translate3d(0, 0, ${walkZ * 0.12}px)`;
    if (floor) floor.style.transform = `rotateX(-68deg) translateZ(${20 + walkZ * 0.08}px)`;
    if (wallLeft) wallLeft.style.transform = `rotateY(42deg) translateZ(${-40 + walkZ * 0.05}px)`;
    if (wallRight) wallRight.style.transform = `rotateY(-42deg) translateZ(${-40 + walkZ * 0.05}px)`;

    if (walkProgressBar) walkProgressBar.style.width = `${progress * 100}%`;
    if (walkProgressEl) walkProgressEl.setAttribute('aria-valuenow', String(Math.round(progress * 100)));

    document.body.classList.toggle('corridor-end', progress > 0.88);

    document.querySelectorAll('.corridor-frame--nav').forEach((frame) => {
      const depth = Number(frame.dataset.depth) || 0;
      frame.classList.toggle('is-near', Math.abs(depth - walkZ) < 200);
    });
  }

  function setupMouseParallax() {
    if (!viewport || window.matchMedia('(pointer: coarse)').matches) return;

    let raf = null;
    let tx = 0;
    let ty = 0;
    let cx = 0;
    let cy = 0;

    document.addEventListener('mousemove', (e) => {
      if (currentPage) return;
      const rect = viewport.getBoundingClientRect();
      if (rect.top > window.innerHeight || rect.bottom < 0) return;
      tx = ((e.clientX - rect.left) / rect.width - 0.5) * 4;
      ty = ((e.clientY - rect.top) / rect.height - 0.5) * 3;
      if (!raf) raf = requestAnimationFrame(applyTilt);
    });

    function applyTilt() {
      cx += (tx - cx) * 0.06;
      cy += (ty - cy) * 0.06;
      if (scene) scene.style.transform = `rotateY(${cx * 0.15}deg) rotateX(${-cy * 0.12}deg)`;
      if (viewport) viewport.style.perspectiveOrigin = `${50 + cx * 0.4}% ${48 + cy * 0.3}%`;
      if (Math.abs(tx - cx) > 0.02 || Math.abs(ty - cy) > 0.02) {
        raf = requestAnimationFrame(applyTilt);
      } else {
        raf = null;
      }
    }
  }

  function pauseCorridorScroll(paused) {
    document.body.style.overflow = paused ? 'hidden' : '';
    if (!paused && corridorReady) updateWalk();
  }

  /* ——— Navigation ——— */
  function setupNavigation() {
    frames.forEach((frame) => {
      frame.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const page = frame.dataset.page;
        if (page) navigateTo(page);
      });
    });

    homeBtn?.addEventListener('click', () => navigateTo(null));
  }

  function handleInitialRoute() {
    const hash = window.location.hash.slice(1);
    if (hash && PAGES.includes(hash)) {
      const delay = REDUCED_MOTION ? 100 : ENTRANCE_DURATION + 300;
      setTimeout(() => navigateTo(hash, true), delay);
    }
  }

  function onPopState() {
    const hash = window.location.hash.slice(1);
    if (hash && PAGES.includes(hash)) navigateTo(hash, true);
    else navigateTo(null, true);
  }

  function navigateTo(page, fromHistory = false) {
    if (isTransitioning) return;
    if (page === currentPage) return;

    if (!entrance?.classList.contains('is-complete')) finishEntrance();

    isTransitioning = true;
    document.body.classList.add('is-transitioning');
    pauseCorridorScroll(true);

    if (!fromHistory) {
      if (page) history.pushState({ page }, '', `#${page}`);
      else history.pushState({}, '', window.location.pathname + window.location.search);
    }

    if (currentPage && page) switchPage(currentPage, page);
    else if (page && !currentPage) openPage(page);
    else if (!page && currentPage) closePage(currentPage);
    else finishTransition();
  }

  function openPage(page) {
    const pageEl = document.getElementById(`page-${page}`);
    if (!pageEl) {
      finishTransition();
      return;
    }

    galleryRoom?.classList.add('is-exiting');

    setTimeout(() => {
      galleryRoom?.classList.add('is-hidden');
      galleryRoom?.classList.remove('is-exiting');

      pageContainer.removeAttribute('hidden');
      pageContainer.classList.add('is-active');
      pageEl.removeAttribute('hidden');
      pageEl.classList.add('is-visible');

      document.body.classList.add('on-page');
      homeBtn?.removeAttribute('hidden');
      homeBtn?.classList.add('is-visible');

      I18n()?.updateDocumentTitle(page);
      currentPage = page;
      window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });

      finishTransition();
    }, REDUCED_MOTION ? 0 : 450);
  }

  function closePage(page) {
    const pageEl = document.getElementById(`page-${page}`);
    pageEl?.classList.add('is-exiting');
    pageEl?.classList.remove('is-visible');

    setTimeout(() => {
      pageEl?.setAttribute('hidden', '');
      pageEl?.classList.remove('is-exiting');
      pageContainer.setAttribute('hidden', '');
      pageContainer.classList.remove('is-active');

      galleryRoom?.classList.remove('is-hidden');
      document.body.classList.remove('on-page');
      homeBtn?.classList.remove('is-visible');
      homeBtn?.setAttribute('hidden', '');

      I18n()?.updateDocumentTitle();
      currentPage = null;

      requestAnimationFrame(() => {
        window.scrollTo({ top: getTrackTop(), behavior: REDUCED_MOTION ? 'auto' : 'smooth' });
        updateWalk();
      });

      finishTransition();
    }, REDUCED_MOTION ? 0 : 400);
  }

  function switchPage(from, to) {
    const fromEl = document.getElementById(`page-${from}`);
    const toEl = document.getElementById(`page-${to}`);

    fromEl?.classList.add('is-exiting');
    fromEl?.classList.remove('is-visible');

    setTimeout(() => {
      fromEl?.setAttribute('hidden', '');
      fromEl?.classList.remove('is-exiting');

      toEl.removeAttribute('hidden');
      toEl.classList.add('is-visible');

      I18n()?.updateDocumentTitle(to);
      currentPage = to;
      window.scrollTo({ top: 0, behavior: REDUCED_MOTION ? 'auto' : 'smooth' });

      finishTransition();
    }, REDUCED_MOTION ? 0 : 350);
  }

  function finishTransition() {
    isTransitioning = false;
    document.body.classList.remove('is-transitioning');
    pauseCorridorScroll(!!currentPage);
  }

  function setupContactForm() {
    const form = document.getElementById('submit-form');
    const feedback = document.getElementById('submit-feedback');
    const submitBtn = document.getElementById('submit-btn');

    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      if (feedback) feedback.textContent = I18n()?.t('pages.submit.success') || '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = I18n()?.t('pages.submit.submittedBtn') || 'Submitted';
      }
      form.reset();
    });

    window.addEventListener('glow:langchange', () => {
      if (submitBtn?.disabled) {
        submitBtn.textContent = I18n()?.t('pages.submit.submittedBtn') || '';
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
