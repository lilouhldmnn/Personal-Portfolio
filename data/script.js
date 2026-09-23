document.addEventListener('DOMContentLoaded', () => {
  const vinyl = document.getElementById('vinyl-record');

  if (vinyl) {
    // Clic pour mettre en pause ou relancer la rotation
    vinyl.addEventListener('click', () => {
      vinyl.classList.toggle('paused');
    });
  }
});