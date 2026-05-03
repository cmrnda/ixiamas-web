(function () {
  function setCurrentYear() {
    const year = document.querySelector('[data-year]');
    if (year) year.textContent = new Date().getFullYear();
  }

  document.addEventListener('DOMContentLoaded', () => {
    setCurrentYear();
    window.IxiamasNavigation?.init();
    window.IxiamasFilters?.init();
  });
})();
