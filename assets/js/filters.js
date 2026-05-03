(function () {
  function initDocumentFilters() {
    const filterButtons = document.querySelectorAll('[data-filter]');
    const documents = document.querySelectorAll('[data-category]');

    if (!filterButtons.length || !documents.length) return;

    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const filter = button.dataset.filter;

        filterButtons.forEach((item) => item.classList.remove('active'));
        button.classList.add('active');

        documents.forEach((doc) => {
          const categories = doc.dataset.category.split(' ');
          doc.hidden = filter !== 'todos' && !categories.includes(filter);
        });
      });
    });
  }

  window.IxiamasFilters = { init: initDocumentFilters };
})();
