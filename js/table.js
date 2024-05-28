(() => {
  const table = document.querySelector('.table');

  table.addEventListener('click', (e) => {
    if (e.target.closest('.table_removeBtn')) {
      const tr = e.target.closest('tr');
      tr.remove();
    }
  });
})();
