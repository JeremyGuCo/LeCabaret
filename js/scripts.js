window.addEventListener('load', () => {
  const curtainContainer = document.querySelector('.curtain-container');
  const container = document.querySelector('.container');
  
  setTimeout(() => {
    curtainContainer.classList.add('open');
    setTimeout(() => {
      curtainContainer.style.display = 'none';
      container.classList.add('visible');
      document.body.style.overflow = 'auto'; // Réactive le défilement après l'animation
    }, 1500); // Durée de l'animation des rideaux
  }, 1000); // Délai avant le début de l'animation des rideaux
});