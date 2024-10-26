window.addEventListener('load', () => {
  const curtainContainer = document.querySelector('.curtain-container');
  const backgroundContainer = document.querySelector('.background-container');
  const container = document.querySelector('.container');
  const backgroundMusic = document.getElementById('background-music');
  
  setTimeout(() => {
    curtainContainer.classList.add('open');
    setTimeout(() => {
      curtainContainer.style.display = 'none';
      backgroundContainer.classList.add('bg-visible');
      setTimeout(() => {
        container.classList.add('visible');
        backgroundMusic.play(); // Démarre la lecture de la musique
        document.body.style.overflow = 'auto'; // Réactive le défilement après l'animation
      }, 2000); // Délai pour l'apparition du contenu après l'arrière-plan
    }, 2000); // Durée de l'animation des rideaux
  }, 1000); // Délai avant le début de l'animation des rideaux
});