// Lógica básica para el cambio de pestañas
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.nav-tabs .tab');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Remover el estado activo de todas las pestañas
      tabs.forEach(t => t.classList.remove('active'));
      // Ocultar todo el contenido
      contents.forEach(content => {
        content.style.display = 'none';
      });
      // Activar la pestaña seleccionada
      tab.classList.add('active');
      const targetId = tab.getAttribute('data-tab');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.style.display = 'block';
      }
    });
  });
});