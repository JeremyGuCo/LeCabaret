document.getElementById('open-curtains').addEventListener('click', () => {
  const curtainContainer = document.querySelector('.curtain-container');
  const backgroundContainer = document.querySelector('.background-container');
  const container = document.querySelector('.container');
  const openCurtainsButton = document.getElementById('open-curtains');

  openCurtainsButton.style.display = 'none';

  setTimeout(() => {
    curtainContainer.classList.add('open');
    setTimeout(() => {
      curtainContainer.style.display = 'none';
      backgroundContainer.classList.add('bg-visible');
      setTimeout(() => {
        container.classList.add('visible');
        document.body.style.overflow = 'auto';
      }, 1000);
    }, 1000);
  }, 500);
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".element");
  const audioPlayer = document.getElementById("audio-player");
  let illuminatedCount = 0;

  elements.forEach((element) => {
    element.addEventListener("click", () => {
      if (!element.classList.contains("illuminated")) {
        element.classList.add("illuminated");
        illuminatedCount++;

        // Vérifie si les 4 éléments sont illuminés
        if (illuminatedCount === elements.length) {
          // Affiche le lecteur MP3
          audioPlayer.style.display = "block";
          // Lance la musique automatiquement (facultatif)
          document.getElementById("audio").play();
        }
      }
    });
  });
});