/**
 * ubiq-tabs.js — Transforms the Ubiquitous Language page into a tabbed
 * interface. Each letter (A–Z) becomes a tab; its definition list becomes
 * the tab panel.
 *
 * Reads the URL hash on load to activate the correct tab. Listens for
 * hashchange so sidebar heading links work with heading-scroll.js.
 *
 * Accessibility: ARIA tablist/tab/tabpanel roles, keyboard navigation
 * (ArrowLeft/Right/Home/End), focus management.
 */
(function () {
  'use strict';

  if (window.pagePath !== '/ubiq/') return;

  var content = document.querySelector('.content');
  if (!content) return;

  // ── Collect sections (h2 + its following siblings) ──────────────────────

  var sections = [];
  var current = null;
  var children = Array.from(content.children);

  for (var i = 0; i < children.length; i++) {
    var el = children[i];
    // Skip non-glossary elements (e.g. comments section) so they stay
    // outside all tab panels and remain always visible.
    if (el.classList && el.classList.contains('comments')) continue;
    if (el.tagName === 'H2') {
      current = {
        heading: el,
        letter: el.textContent.trim(),
        children: [],
      };
      sections.push(current);
    } else if (current) {
      current.children.push(el);
    }
  }

  if (sections.length === 0) return;

  // ── Build tab bar ───────────────────────────────────────────────────────

  var tablist = document.createElement('div');
  tablist.className = 'ubiq-tablist';
  tablist.setAttribute('role', 'tablist');

  var panels = [];

  sections.forEach(function (section, i) {
    var letter = section.letter.toLowerCase();

    var tab = document.createElement('button');
    tab.className = 'ubiq-tab';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', 'false');
    tab.setAttribute('aria-controls', 'ubiq-panel-' + letter);
    tab.setAttribute('id', 'ubiq-tab-' + letter);
    tab.textContent = section.letter;
    tablist.appendChild(tab);

    var panel = document.createElement('div');
    panel.className = 'ubiq-panel';
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', 'ubiq-tab-' + letter);
    panel.setAttribute('id', 'ubiq-panel-' + letter);
    panel.hidden = true;

    // Move heading and content into the panel
    panel.appendChild(section.heading);
    section.children.forEach(function (child) {
      panel.appendChild(child);
    });

    panels.push(panel);
  });

  // Insert after the intro paragraph (the last child before the first h2)
  var insertAfter = children[0]; // first child is the h1
  // Find the last non-h2 child before the first section
  for (var j = 0; j < children.length; j++) {
    if (children[j].tagName === 'H2') break;
    insertAfter = children[j];
  }

  // Insert panels in DOM order, anchored to the previous element
  var anchor = insertAfter;
  anchor.insertAdjacentElement('afterend', tablist);
  anchor = tablist;
  panels.forEach(function (panel) {
    anchor.insertAdjacentElement('afterend', panel);
    anchor = panel;
  });

  // Ensure the comments section stays after the last panel
  var comments = document.querySelector('.content > .comments');
  if (comments) {
    anchor.insertAdjacentElement('afterend', comments);
  }

  // ── Tab activation ──────────────────────────────────────────────────────

  var activeIndex = -1;

  function activateTab(index) {
    if (index === activeIndex) return;
    if (index < 0 || index >= sections.length) {
      // Hide all panels if index is out of range
      panels.forEach(function (p) { p.hidden = true; });
      var allTabs = tablist.querySelectorAll('.ubiq-tab');
      allTabs.forEach(function (t) {
        t.setAttribute('aria-selected', 'false');
        t.classList.remove('is-active');
      });
      activeIndex = -1;
      return;
    }

    panels.forEach(function (p, i) {
      p.hidden = i !== index;
    });

    var allTabs = tablist.querySelectorAll('.ubiq-tab');
    allTabs.forEach(function (t, i) {
      t.setAttribute('aria-selected', i === index ? 'true' : 'false');
      t.classList.toggle('is-active', i === index);
    });

    // Scroll the active tab into view (horizontal tab bar)
    allTabs[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
    });

    activeIndex = index;
  }

  // ── Find section index for a URL hash ──────────────────────────────────

  function findSectionIndex(hash) {
    if (!hash) return 0;
    var id = hash.replace(/^#/, '');
    if (!id) return 0;

    // Direct match: hash is a letter (e.g., #a, #b, #c)
    var idx = sections.findIndex(function (s) {
      return s.letter.toLowerCase() === id.toLowerCase();
    });
    if (idx >= 0) return idx;

    // Hash is a term anchor — find which panel contains it
    var el = document.getElementById(id);
    if (el) {
      for (var i = 0; i < panels.length; i++) {
        if (panels[i].contains(el)) return i;
      }
    }

    return 0;
  }

  // ── Scroll to a term anchor after its panel is visible ─────────────────

  function scrollToTerm(id) {
    if (!id) return;
    var el = document.getElementById(id);
    if (el) {
      requestAnimationFrame(function () {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    }
  }

  // ── Click handler ──────────────────────────────────────────────────────

  tablist.addEventListener('click', function (e) {
    var tab = e.target.closest('.ubiq-tab');
    if (!tab) return;
    var idx = Array.from(tablist.querySelectorAll('.ubiq-tab')).indexOf(tab);
    if (idx < 0) return;
    activateTab(idx);

    // Update URL hash (no scroll — the tab is already visible)
    var letter = sections[idx].letter.toLowerCase();
    history.pushState({ tab: letter }, '', '/ubiq/#' + letter);
  });

  // ── Hash change (from sidebar heading clicks, back/forward) ────────────

  function onHashChange() {
    var hash = window.location.hash;
    var idx = findSectionIndex(hash);
    if (idx !== activeIndex) {
      activateTab(idx);
    }

    // If the hash is a term anchor (not a section letter), scroll to it
    var id = hash.replace(/^#/, '');
    if (id) {
      var isLetter = sections.some(function (s) {
        return s.letter.toLowerCase() === id.toLowerCase();
      });
      if (!isLetter) {
        scrollToTerm(id);
      }
    }
  }

  window.addEventListener('hashchange', onHashChange);

  // Also handle popstate (back/forward) that heading-scroll.js uses
  window.addEventListener('popstate', function (e) {
    var hash = window.location.hash;
    if (hash) onHashChange();
  });

  // ── Intercept sidebar heading clicks ──────────────────────────────────
  // heading-scroll.js uses pushState (no hashchange event) then scrolls.
  // We need to activate the tab before the scroll target is visible.

  document.addEventListener('click', function (e) {
    var link = e.target.closest('[data-heading-id]');
    if (!link) return;
    var id = link.getAttribute('data-heading-id');
    if (!id) return;

    // Defer so heading-scroll.js's handler runs first (scroll may fail silently)
    setTimeout(function () {
      var idx = findSectionIndex('#' + id);
      if (idx >= 0) {
        activateTab(idx);
        // Now that the panel is visible, scroll to the actual heading
        var el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 0);
  });

  // ── Keyboard navigation ────────────────────────────────────────────────

  tablist.addEventListener('keydown', function (e) {
    var tabs = Array.from(tablist.querySelectorAll('.ubiq-tab'));
    var currentFocus = tabs.indexOf(document.activeElement);
    if (currentFocus < 0) return;

    var next;
    switch (e.key) {
      case 'ArrowRight':
        e.preventDefault();
        next = (currentFocus + 1) % tabs.length;
        tabs[next].focus();
        break;
      case 'ArrowLeft':
        e.preventDefault();
        next = (currentFocus - 1 + tabs.length) % tabs.length;
        tabs[next].focus();
        break;
      case 'Home':
        e.preventDefault();
        tabs[0].focus();
        break;
      case 'End':
        e.preventDefault();
        tabs[tabs.length - 1].focus();
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        activateTab(currentFocus);
        var letter = sections[currentFocus].letter.toLowerCase();
        history.pushState({ tab: letter }, '', '/ubiq/#' + letter);
        break;
    }
  });

  // ── Initialize ─────────────────────────────────────────────────────────

  var initialHash = window.location.hash;
  var initialIndex = findSectionIndex(initialHash);
  activateTab(initialIndex);

  // If the hash is a term anchor, scroll to it after the panel is shown
  if (initialHash) {
    var id = initialHash.replace(/^#/, '');
    var isLetter = sections.some(function (s) {
      return s.letter.toLowerCase() === id.toLowerCase();
    });
    if (!isLetter) {
      scrollToTerm(id);
    }
  }
})();