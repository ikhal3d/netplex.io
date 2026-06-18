/* ──────────────────────────────────────────────────────────────
   Netplex.io — scroll reveal. Marketing pages only.
   Tags a curated set of cards + section intros with [data-reveal];
   an IntersectionObserver flips them to .is-in as they scroll into
   view. Siblings in the same group get a small stagger. Honours
   prefers-reduced-motion and degrades gracefully without JS/IO.
   ────────────────────────────────────────────────────────────── */
(function () {
  // Curated — deliberately NOT every card. Section intros + the
  // marquee card grids (capabilities, pricing tiers, feature cards).
  var SELECTORS = [
    // section intros (shared across every page)
    '.sec-eyebrow',
    'h2.sec',
    '.sec-sub',
    // index
    '.cap',
    '.tier',
    '.statcell',
    '.win',
    '.cmp tbody tr',
    // comparison pages (eve-ng / gns3)
    '.pain-card',
    '.mig-step',
    // about
    '.tmember',
    '.principle',
    // contact / support
    '.ch-row',
    // download
    '.dl-card',
    '.ic-tile',
    '.run-step',
    '.dl-spec',
    // faq
    '.qa',
    // forums
    '.cat-row',
    // knowledge base
    '.kb-cat',
    // legal
    '.legal-doc',
    // roadmap
    '.rm-card',
    '.reqitem'
  ];

  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function collect() {
    var seen = [];
    SELECTORS.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (el) {
        if (seen.indexOf(el) === -1) seen.push(el);
      });
    });
    return seen;
  }

  function init() {
    var els = collect();
    if (!els.length) return;

    // No animation path: just show everything.
    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach(function (el) { el.classList.add('is-in'); });
      return;
    }

    els.forEach(function (el) { el.setAttribute('data-reveal', ''); });

    var io = new IntersectionObserver(function (entries) {
      // Stagger items that reveal together (e.g. a grid scrolled into view).
      var batch = entries.filter(function (e) { return e.isIntersecting; });
      batch.forEach(function (entry, i) {
        var el = entry.target;
        el.style.setProperty('--reveal-delay', Math.min(i, 6) * 70 + 'ms');
        el.classList.add('is-in');
        io.unobserve(el);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });

    els.forEach(function (el) { io.observe(el); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
