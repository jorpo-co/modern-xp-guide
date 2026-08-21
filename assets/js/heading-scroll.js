(function() {
  var pagePath = window.pagePath;

  function scrollToHeading(id) {
    var el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return true;
    }
    return false;
  }

  function headingIdFromPath() {
    var path = window.location.pathname.replace(/\/$/, '');
    var base = pagePath.replace(/\/$/, '');
    if (path === base) return null;
    if (path.startsWith(base + '/')) {
      return path.slice(base.length + 1);
    }
    return null;
  }

  document.addEventListener('click', function(e) {
    var link = e.target.closest('[data-heading-id]');
    if (!link) return;
    e.preventDefault();
    var id = link.getAttribute('data-heading-id');
    var url = link.getAttribute('href');
    history.pushState({ headingId: id }, '', url);
    scrollToHeading(id);
  });

  window.addEventListener('popstate', function(e) {
    var id = e.state && e.state.headingId ? e.state.headingId : headingIdFromPath();
    if (id) scrollToHeading(id);
  });

  var initialId = headingIdFromPath();
  if (initialId) {
    requestAnimationFrame(function() { scrollToHeading(initialId); });
  } else {
    var stored = sessionStorage.getItem('goto-heading');
    if (stored) {
      sessionStorage.removeItem('goto-heading');
      var url = pagePath + stored;
      history.replaceState({ headingId: stored }, '', url);
      requestAnimationFrame(function() { scrollToHeading(stored); });
    }
  }
})();