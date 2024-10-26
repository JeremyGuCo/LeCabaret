document.getElementById('open-curtains').addEventListener('click', () => {
  const curtainContainer = document.querySelector('.curtain-container');
  const backgroundContainer = document.querySelector('.background-container');
  const container = document.querySelector('.container');
  const backgroundMusic = document.getElementById('background-music');
  const openCurtainsButton = document.getElementById('open-curtains');

  openCurtainsButton.style.display = 'none'; // Cache le bouton après le clic

  setTimeout(() => {
    curtainContainer.classList.add('open');
    setTimeout(() => {
      curtainContainer.style.display = 'none';
      backgroundContainer.classList.add('bg-visible');
      setTimeout(() => {
        container.classList.add('visible');
        backgroundMusic.play(); // Démarre la lecture de la musique
        document.body.style.overflow = 'auto'; // Réactive le défilement après l'animation
      }, 1500); // Délai pour l'apparition du contenu après l'arrière-plan
    }, 1500); // Durée de l'animation des rideaux
  }, 1000); // Délai avant le début de l'animation des rideaux
});