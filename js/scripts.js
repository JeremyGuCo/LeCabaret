// document.getElementById('open-curtains').addEventListener('click', () => {
//   const curtainContainer = document.querySelector('.curtain-container');
//   const backgroundContainer = document.querySelector('.background-container');
//   const container = document.querySelector('.container');
//   const backgroundMusic = document.getElementById('background-music');
//   const openCurtainsButton = document.getElementById('open-curtains');

//   openCurtainsButton.style.display = 'none'; // Cache le bouton après le clic

//   setTimeout(() => {
//     curtainContainer.classList.add('open');
//     setTimeout(() => {
//       curtainContainer.style.display = 'none';
//       backgroundContainer.classList.add('bg-visible');
//       setTimeout(() => {
//         container.classList.add('visible');
//         backgroundMusic.play(); // Démarre la lecture de la musique
//         document.body.style.overflow = 'auto'; // Réactive le défilement après l'animation
//       }, 1500); // Délai pour l'apparition du contenu après l'arrière-plan
//     }, 1500); // Durée de l'animation des rideaux
//   }, 1000); // Délai avant le début de l'animation des rideaux
// });


var makeItRain = function () {
  //clear out everything
  $('.rain').empty();

  var increment = 0;
  var drops = "";
  var backDrops = "";

  while (increment < 100) {
    //couple random numbers to use for various randomizations
    //random number between 98 and 1
    var randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    var randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;
    //add in a new raindrop with various randomizations to certain CSS properties
    drops += '<div class="drop" style="left: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
    backDrops += '<div class="drop" style="right: ' + increment + '%; bottom: ' + (randoFiver + randoFiver - 1 + 100) + '%; animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"><div class="stem" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div><div class="splat" style="animation-delay: 0.' + randoHundo + 's; animation-duration: 0.5' + randoHundo + 's;"></div></div>';
  }

  $('.rain.front-row').append(drops);
  $('.rain.back-row').append(backDrops);
}

document.addEventListener('DOMContentLoaded', function () {
  makeItRain();
});