(function() {
  var path = window.location.pathname.replace(/\/$/, '');
  var parts = path.split('/').filter(Boolean);
  if (parts.length >= 1) {
    var headingId = parts[parts.length - 1];
    var parent = '/' + parts.slice(0, -1).join('/');
    if (parent.length > 1) parent += '/';
    sessionStorage.setItem('goto-heading', headingId);
    window.location.replace(parent);
  } else {
    window.location.replace('/');
  }
})();