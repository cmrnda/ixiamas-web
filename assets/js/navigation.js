(function () {
  function getCurrentPage() {
    return location.pathname.split('/').pop() || 'index.html';
  }

  function markActiveLink(menu, currentPage) {
    menu.querySelectorAll('a[data-nav]').forEach((link) => {
      if (link.dataset.nav !== currentPage) return;
      link.classList.add('active');

      const group = link.closest('.nav-group');
      if (group) group.classList.add('active');
    });
  }

  function setupMobileMenu(menu, toggle) {
    if (!menu || !toggle) return;

    toggle.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function setupNavGroups() {
    document.querySelectorAll('.nav-group').forEach((group) => {
      group.addEventListener('toggle', () => {
        if (!group.open) return;

        document.querySelectorAll('.nav-group').forEach((other) => {
          if (other !== group) other.removeAttribute('open');
        });
      });
    });
  }

  function initNavigation() {
    const menu = document.querySelector('.menu');
    const toggle = document.querySelector('[data-menu-toggle]');

    if (menu) markActiveLink(menu, getCurrentPage());
    setupMobileMenu(menu, toggle);
    setupNavGroups();
  }

  window.IxiamasNavigation = { init: initNavigation };
})();
