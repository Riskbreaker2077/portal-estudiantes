// Lógica básica para el cambio de pestañas
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tabs .tab');
  const contents = document.querySelectorAll('.tab-content');

  function activate(tabEl) {
    tabs.forEach(t => t.classList.remove('active'));
    tabEl.classList.add('active');
    const target = tabEl.getAttribute('data-tab');
    contents.forEach(c => {
      c.style.display = c.id === target ? 'block' : 'none';
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activate(tab));
  });
});
