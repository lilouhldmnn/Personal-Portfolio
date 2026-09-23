// Attend que la structure HTML soit complètement chargée par le navigateur
document.addEventListener('DOMContentLoaded', () => {
  
  // Sélectionne l'élément HTML avec l'identifiant "vinyl-record"
  const vinyl = document.getElementById('vinyl-record');

  // Sécurité : vérifie que l'élément existe bien sur la page
  if (vinyl) {
    
    // Écoute le clic de l'utilisateur sur le vinyle
    vinyl.addEventListener('click', () => {
      /* .toggle('paused') :
         - Si la classe "paused" n'est pas présente, il l'ajoute (le vinyle s'arrête).
         - Si elle est déjà présente, il la retire (le vinyle repart). */
      vinyl.classList.toggle('paused');
    });

  }
});
