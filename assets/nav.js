/* Shared nav behaviour: mobile menu toggle + neutralise placeholder links. */
(function () {
  function init() {
    var t = document.querySelector('.menu-toggle');
    var links = document.querySelector('.navlinks');
    if (t && links) {
      t.addEventListener('click', function () { links.classList.toggle('open'); });
    }
    document.querySelectorAll('[data-ext]').forEach(function (a) {
      a.addEventListener('click', function (e) { e.preventDefault(); });
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
