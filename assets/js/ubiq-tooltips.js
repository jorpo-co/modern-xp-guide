/**
 * ubiq-tooltips.js — Shows a brief definition popup on hover for any link
 * pointing to the Ubiquitous Language glossary (/ubiq/#term).
 *
 * Reads term definitions from window.ubiqDefs (set by the ubiq-defs partial).
 */
(function () {
  'use strict';

  // ── helpers ────────────────────────────────────────────────────────────────

  function termIdFromHref(href) {
    var m = href.match(/\/ubiq\/#(.+)$/);
    return m ? m[1] : null;
  }

  // ── tooltip DOM ────────────────────────────────────────────────────────────

  var tip = null;

  function showTooltip(text, el) {
    hideTooltip();

    var rect = el.getBoundingClientRect();

    tip = document.createElement('div');
    tip.className = 'ubiq-tooltip';
    tip.textContent = text;

    // Position below the link, left-aligned
    var left = rect.left;
    var top = rect.bottom + 6;

    document.body.appendChild(tip);

    var tipRect = tip.getBoundingClientRect();

    // Avoid right overflow
    if (left + tipRect.width > window.innerWidth - 12) {
      left = window.innerWidth - tipRect.width - 12;
    }
    // Avoid bottom overflow — flip above
    if (top + tipRect.height > window.innerHeight - 12) {
      top = rect.top - tipRect.height - 6;
    }
    // Avoid left overflow
    if (left < 12) left = 12;
    // Avoid top overflow
    if (top < 12) top = 12;

    tip.style.left = left + 'px';
    tip.style.top = top + 'px';
  }

  function hideTooltip() {
    if (tip) {
      tip.remove();
      tip = null;
    }
  }

  // ── hover debounce ─────────────────────────────────────────────────────────

  var timer = null;

  function onMouseEnter(e) {
    var id = termIdFromHref(e.target.getAttribute('href'));
    if (!id || !window.ubiqDefs || !window.ubiqDefs[id]) return;
    timer = setTimeout(function () {
      showTooltip(window.ubiqDefs[id], e.target);
    }, 200);
  }

  function onMouseLeave() {
    clearTimeout(timer);
    timer = null;
    hideTooltip();
  }

  // ── hide tooltip on scroll ─────────────────────────────────────────────────

  function onScroll() {
    hideTooltip();
  }

  // ── bind links ─────────────────────────────────────────────────────────────

  function bind() {
    var links = document.querySelectorAll('a[href^="/ubiq/#"]');
    for (var i = 0; i < links.length; i++) {
      links[i].addEventListener('mouseenter', onMouseEnter);
      links[i].addEventListener('mouseleave', onMouseLeave);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // Run after DOM is ready.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bind);
  } else {
    bind();
  }
})();